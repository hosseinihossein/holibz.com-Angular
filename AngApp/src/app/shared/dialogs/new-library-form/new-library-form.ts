import { Component, computed, ElementRef, signal, viewChild } from '@angular/core';
import { form, FormField, maxLength, minLength, required, validate } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatFormField, MatButton, MatLabel,
    MatInput, MatError, FormField,
  ],
  selector: 'app-new-library-form',
  styleUrl: './new-library-form.css',
  templateUrl: './new-library-form.html',
})
export class NewLibraryForm {
  //readonly data = inject<{libName:string, libId:string}>(MAT_DIALOG_DATA);

  selectedFile = signal<File | null>(null);
  previewImgSrc = signal<string | null>(null);
  imageSizeError = signal<string | null>(null);

  canvas = viewChild<ElementRef<HTMLCanvasElement>>("canvas");

  signalModel = signal<NewLibrary_FormModel>({
    title: '',
    description: '',
  });
  newLibForm = form(this.signalModel, (schemaPath) => {
    required(schemaPath.title, { message: 'Title is required for the new library!' });
    maxLength(schemaPath.title, 60, { message: 'Title cannot be more than 60 characters!' });
    minLength(schemaPath.title, 3, { message: 'Title cannot be less than 3 characters!' });
    validate(schemaPath.title, ({ value }) => {
      const current = value();
      const trimmed = current.trim();
      if (current !== trimmed && trimmed === '') {
        return {
          kind: 'trimmed',
          message: 'Title cannot be only blank space!',
        };
      }
      return null;
    });

    maxLength(schemaPath.description, 400, { message: 'Descrption cannot be more than 400 characters!' });
  });

  result = computed<NewLibrary_ResultModel>(() => ({
    description: this.signalModel().description,
    image: this.selectedFile(),
    title: this.signalModel().title.trim(),
  }));

  onSelectImage(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && /*input.files.length > 0 &&*/ input.files[0]) {
      if (input.files[0].size > (120 * 1024)) {//more than 120 KB
        if (this.canvas()) {
          const reader = new FileReader(); // Create a FileReader instance

          // Load the image as a Data URL
          reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
              const ctx = this.canvas()!.nativeElement.getContext("2d");
              // Set new size
              const newWidth = 800;
              const newHeight = Math.round((img.height / img.width) * newWidth);

              this.canvas()!.nativeElement.width = newWidth;
              this.canvas()!.nativeElement.height = newHeight;

              // Draw resized image
              if (ctx) {
                ctx.drawImage(img, 0, 0, newWidth, newHeight);
              }

              // Convert to data URL (can be uploaded or displayed)
              const resizedDataUrl = this.canvas()!.nativeElement.toDataURL("image/webp", 0.8); // 0.8 = quality only for image/jpeg and image/webp
              this.previewImgSrc.set(resizedDataUrl);

              this.canvas()!.nativeElement.toBlob((blob) => {
                if (blob) {
                  let file = new File([blob], "editedImage", {
                    type: blob.type || "application/octet-stream",
                    lastModified: Date.now()
                  });
                  this.selectedFile.set(file);
                }
              }, "image/webp", 0.8);
            };
            img.src = e.target!.result as string;// ?? this.data.value;
          };

          reader.readAsDataURL(input.files[0]); // Read the file as a Data URL
        }
        else {
          this.imageSizeError.set(
            `Size of the choosen image cannot be more than 120 KB!`
          );
        }
      }
      else {
        this.selectedFile.set(input.files[0]);

        const reader = new FileReader(); // Create a FileReader instance

        // Load the image as a Data URL
        reader.onload = (e) => {
          this.previewImgSrc.set(e.target!.result as string);// ?? this.data.value);
        };

        reader.readAsDataURL(input.files[0]); // Read the file as a Data URL
      }
    }
    else {
      this.selectedFile.set(null);
      this.previewImgSrc.set(null);
    }
  }

}

interface NewLibrary_FormModel {
  title: string;
  description: string;
}
export interface NewLibrary_ResultModel {
  title: string;
  description: string;
  image: File | null;
}
