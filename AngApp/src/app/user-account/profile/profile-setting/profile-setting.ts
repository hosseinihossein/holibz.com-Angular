import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButton, MatFabButton, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { WaitSpinner } from '../../../shared/wait-spinner/wait-spinner';
import { MatDialog } from '@angular/material/dialog';
import { httpResource } from '@angular/common/http';
import { IdentityService } from '../../../identity/identity-service';
import { ProfileService } from '../profile-service';
import { GetImage, GetImage_DataModel, GetImage_ResultModel } from '../../../shared/dialogs/get-image/get-image';
import { Result, ResultDataModel } from '../../../shared/dialogs/result/result';
import { ConfirmDelete, ConfirmDeleteDataModel, ConfirmDeleteResultModel } from '../../../shared/dialogs/confirm-delete/confirm-delete';
import { EditInputText, EditInputTextDataModel, EditInputTextResultModel } from '../../../shared/dialogs/edit-input-text/edit-input-text';
import { EditTextarea, EditTextareaDataModel, EditTextareaResultModel } from '../../../shared/dialogs/edit-textarea/edit-textarea';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatCardModule, MatIcon, MatIconButton, MatTooltip, NgOptimizedImage, WaitSpinner, RouterLink,
    MatButton
  ],
  selector: 'app-profile-setting',
  styleUrl: './profile-setting.css',
  templateUrl: './profile-setting.html',
})
export class ProfileSetting {
  identityService = inject(IdentityService);
  profileService = inject(ProfileService);
  dialog = inject(MatDialog);

  displayWaitSpinner = signal(false);

  constructor() {
    this.identityService.getAntiForgeryToken.reload();
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
        this.profileService.saveUserAvatar(result.file).subscribe({
          next: res => {
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

  deleteProfileAvatar() {
    this.dialog.open<ConfirmDelete, ConfirmDeleteDataModel, ConfirmDeleteResultModel>(ConfirmDelete,
      {
        data: {
          itemType: 'the profile avatar',
        }
      }
    ).afterClosed().subscribe(result => {
      if (result) {
        this.displayWaitSpinner.set(true);
        this.profileService.deleteUserAvatar().subscribe({
          next: res => {
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

  setName() {
    this.dialog.open<EditInputText, EditInputTextDataModel, EditInputTextResultModel>(EditInputText,
      {
        data: {
          label: "Your Name",
          value: this.profileService.myProfileInfo.value()?.name ?? '',
          maxLength: 60,
        }
      }
    ).afterClosed().subscribe((result) => {
      if (result) {
        this.displayWaitSpinner.set(true);
        this.profileService.changeName(result.value).subscribe({
          next: res => {
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
          label: "Description",
          value: this.profileService.myProfileInfo.value()?.description ?? '',
          maxLength: 4000,
        }
      }
    ).afterClosed().subscribe((result) => {
      if (result) {
        this.displayWaitSpinner.set(true);
        this.profileService.changeDescription(result.value).subscribe({
          next: res => {
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
