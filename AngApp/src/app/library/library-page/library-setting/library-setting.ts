import { NgOptimizedImage } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { IdentityService } from '../../../identity/identity-service';
import { CardTag } from '../../../shared/components/card-tag/card-tag';
import { LibraryCardModel } from '../../library-card/library-card';
import { LibraryService } from '../../library-service';
import { WaitSpinner } from '../../../shared/components/wait-spinner/wait-spinner';
import { MatDialog } from '@angular/material/dialog';
import { GetImage, GetImage_DataModel, GetImage_ResultModel } from '../../../shared/dialogs/get-image/get-image';
import { ConfirmDelete, ConfirmDeleteDataModel, ConfirmDeleteResultModel } from '../../../shared/dialogs/confirm-delete/confirm-delete';
import { Result, ResultDataModel } from '../../../shared/dialogs/result/result';
import { EditInputText, EditInputTextDataModel, EditInputTextResultModel } from '../../../shared/dialogs/edit-input-text/edit-input-text';
import { EditTextarea, EditTextareaDataModel, EditTextareaResultModel } from '../../../shared/dialogs/edit-textarea/edit-textarea';

@Component({
  imports: [MatCard, MatCardHeader, MatIcon, MatCardTitle, MatCardContent,
    MatCardActions, RouterLink, MatButton, NgOptimizedImage, CardTag, WaitSpinner
  ],
  selector: 'app-library-setting',
  styleUrl: './library-setting.css',
  templateUrl: './library-setting.html',
})
export class LibrarySetting {
  readonly activatedRoute = inject(ActivatedRoute);
  readonly identityService = inject(IdentityService);
  readonly libService = inject(LibraryService);
  readonly router = inject(Router);
  readonly dialog = inject(MatDialog);

  private params = toSignal(this.activatedRoute.paramMap);
  readonly libId = computed(() => this.params()?.get("libId"));

  libCardInfo = httpResource<LibraryCardModel>(() =>
    this.libService.libraryCardInfo_Url + this.libId()
  );

  readonly isMine = computed(() => this.identityService.isAuthenticated() &&
    this.libCardInfo.hasValue() &&
    this.libCardInfo.value().ownerId === this.identityService.myIdentityInfo.value()?.id
  );

  ownerUsername = computed(() =>
    this.isMine() ?
      this.identityService.myIdentityInfo.value()?.userName :
      null
  );

  displayWaitSpinner = signal(false);

  constructor() {
    effect(() => {
      if (!this.isMine()) {
        this.router.navigate(['Library', this.libId()]);
      }
    });
  }

  setImage() {
    this.dialog.open<GetImage, GetImage_DataModel, GetImage_ResultModel>(GetImage, {
      data: {
        hasTitle: false,
        imageSize: 128 * 1024,// 128 KB
      }
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.displayWaitSpinner.set(true);
        this.libService.submitImage(result.file, this.libId()!).subscribe({
          next: res => {
            if (res.success) {
              this.libCardInfo.reload();
            }
            this.displayWaitSpinner.set(false);
          },
          error: err => {
            this.displayWaitSpinner.set(false);
            this.dialog.open<Result, ResultDataModel>(Result, {
              data: {
                status: "warning",
                title: "Submit User Image",
                description: [
                  "Something went wrong during submitting user image!",
                ],
              }
            });
            throw (err);
          }
        });
      }
    });
  }

  deleteImage() {
    this.dialog.open<ConfirmDelete, ConfirmDeleteDataModel, ConfirmDeleteResultModel>(ConfirmDelete,
      {
        data: {
          itemType: 'the library image',
        }
      }
    ).afterClosed().subscribe(result => {
      if (result) {
        this.displayWaitSpinner.set(true);
        this.libService.deleteImage(this.libId()!).subscribe({
          next: res => {
            if (res.success) {
              this.libCardInfo.reload();
            }
            this.displayWaitSpinner.set(false);
          },
          error: err => {
            this.displayWaitSpinner.set(false);
            this.dialog.open(Result, {
              data: {
                status: "warning",
                title: "Delete User Image",
                description: [
                  "Something went wrong during deleting user image!",
                ],
              }
            });
            throw (err);
          }
        });
      }
    });
  }

  setTitle() {
    this.dialog.open<EditInputText, EditInputTextDataModel, EditInputTextResultModel>(EditInputText,
      {
        data: {
          label: "Library Title",
          value: this.libCardInfo.value()?.title ?? '',
          maxLength: 60,
        }
      }
    ).afterClosed().subscribe((result) => {
      if (result) {
        this.displayWaitSpinner.set(true);
        this.libService.submitTitle(result.value, this.libId()!).subscribe({
          next: res => {
            if (res.success) {
              this.libCardInfo.reload();
            }
            this.displayWaitSpinner.set(false);
          },
          error: err => {
            this.displayWaitSpinner.set(false);
            this.dialog.open(Result, {
              data: {
                status: "warning",
                title: "Submit Full Name",
                description: [
                  "Something went wrong during submitting full name!",
                ],
              }
            });
            throw (err);
          }
        });
      }
    });
  }

  setDescription() {
    this.dialog.open<EditTextarea, EditTextareaDataModel, EditTextareaResultModel>(EditTextarea,
      {
        data: {
          label: "Library Description",
          value: this.libCardInfo.value()?.description ?? '',
          maxLength: 400,
        }
      }
    ).afterClosed().subscribe((result) => {
      if (result) {
        this.displayWaitSpinner.set(true);
        this.libService.submitDescription(result.value, this.libId()!).subscribe({
          next: res => {
            if (res.success) {
              this.libCardInfo.reload();
            }
            this.displayWaitSpinner.set(false);
          },
          error: err => {
            this.displayWaitSpinner.set(false);
            this.dialog.open(Result, {
              data: {
                status: "warning",
                title: "Submit Description",
                description: [
                  "Something went wrong during submitting description!",
                ],
              }
            });
            throw (err);
          }
        });
      }
    });
  }


}
