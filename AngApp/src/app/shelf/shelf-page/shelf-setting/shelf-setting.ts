import { NgOptimizedImage } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CardTag } from '../../../shared/components/card-tag/card-tag';
import { WaitSpinner } from '../../../shared/components/wait-spinner/wait-spinner';
import { IdentityService } from '../../../identity/identity-service';
import { ShelfService } from '../../shelf-service';
import { MatDialog } from '@angular/material/dialog';
import { toSignal } from '@angular/core/rxjs-interop';
import { httpResource } from '@angular/common/http';
import { ShelfCardInfo } from '../../shelf-card/shelf-card';
import { GetImage, GetImage_DataModel, GetImage_ResultModel } from '../../../shared/dialogs/get-image/get-image';
import { Result, ResultDataModel } from '../../../shared/dialogs/result/result';
import { ConfirmDelete, ConfirmDeleteDataModel, ConfirmDeleteResultModel } from '../../../shared/dialogs/confirm-delete/confirm-delete';
import { EditInputText, EditInputTextDataModel, EditInputTextResultModel } from '../../../shared/dialogs/edit-input-text/edit-input-text';
import { EditTextarea, EditTextareaDataModel, EditTextareaResultModel } from '../../../shared/dialogs/edit-textarea/edit-textarea';

@Component({
  imports: [MatCard, MatCardHeader, MatIcon, MatCardTitle, MatCardContent, MatIconButton,
    MatCardActions, RouterLink, MatButton, NgOptimizedImage, CardTag, WaitSpinner],
  selector: 'app-shelf-setting',
  styleUrl: './shelf-setting.css',
  templateUrl: './shelf-setting.html',
})
export class ShelfSetting {
  readonly activatedRoute = inject(ActivatedRoute);
  readonly identityService = inject(IdentityService);
  readonly shelfService = inject(ShelfService);
  readonly router = inject(Router);
  readonly dialog = inject(MatDialog);

  private params = toSignal(this.activatedRoute.paramMap);
  readonly shelfId = computed(() => this.params()?.get("shelfId"));

  shelfCardInfo = httpResource<ShelfCardInfo>(() =>
    this.shelfService.GetShelfCardInfo_Url + this.shelfId()
  );

  readonly isMine = computed(() => this.identityService.isAuthenticated() &&
    this.shelfCardInfo.hasValue() &&
    this.shelfCardInfo.value().ownerId === this.identityService.myIdentityInfo.value()?.id
  );

  ownerUsername = computed(() =>
    this.isMine() ?
      this.identityService.myIdentityInfo.value()?.userName :
      null
  );

  displayWaitSpinner = signal(false);

  constructor() {
    effect(() => {
      if (this.shelfCardInfo.value() && !this.isMine()) {
        this.router.navigate(['Shelf', this.shelfId()]);
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
        this.shelfService.submitImage(result.file, this.shelfId()!).subscribe({
          next: res => {
            if (res.success) {
              this.shelfCardInfo.reload();
            }
            this.displayWaitSpinner.set(false);
          },
          error: err => {
            this.displayWaitSpinner.set(false);
            this.dialog.open<Result, ResultDataModel>(Result, {
              data: {
                status: "warning",
                title: "Submit Shelf Image",
                description: [
                  "Something went wrong during submitting shelf image!",
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
          itemType: 'the shelf image',
        }
      }
    ).afterClosed().subscribe(result => {
      if (result) {
        this.displayWaitSpinner.set(true);
        this.shelfService.deleteImage(this.shelfId()!).subscribe({
          next: res => {
            if (res.success) {
              this.shelfCardInfo.reload();
            }
            this.displayWaitSpinner.set(false);
          },
          error: err => {
            this.displayWaitSpinner.set(false);
            this.dialog.open(Result, {
              data: {
                status: "warning",
                title: "Delete Shelf Image",
                description: [
                  "Something went wrong during deleting shelf image!",
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
          label: "Shelf Title",
          value: this.shelfCardInfo.value()?.title ?? '',
          maxLength: 60,
        }
      }
    ).afterClosed().subscribe((result) => {
      if (result) {
        this.displayWaitSpinner.set(true);
        this.shelfService.submitTitle(result.value, this.shelfId()!).subscribe({
          next: res => {
            if (res.success) {
              this.shelfCardInfo.reload();
            }
            this.displayWaitSpinner.set(false);
          },
          error: err => {
            this.displayWaitSpinner.set(false);
            this.dialog.open(Result, {
              data: {
                status: "warning",
                title: "Submit Title",
                description: [
                  "Something went wrong during submitting title!",
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
          label: "Shelf Description",
          value: this.shelfCardInfo.value()?.description ?? '',
          maxLength: 400,
        }
      }
    ).afterClosed().subscribe((result) => {
      if (result) {
        this.displayWaitSpinner.set(true);
        this.shelfService.submitDescription(result.value, this.shelfId()!).subscribe({
          next: res => {
            if (res.success) {
              this.shelfCardInfo.reload();
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
