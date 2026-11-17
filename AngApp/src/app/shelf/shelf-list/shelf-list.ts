import { Component, inject, input, output, signal } from '@angular/core';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatTooltip } from '@angular/material/tooltip';
import { ShelfCard } from '../shelf-card/shelf-card';
import { MatDialog } from '@angular/material/dialog';
import { ShelfService } from '../shelf-service';
import { IdentityService } from '../../identity/identity-service';
import { NewLibrary_ResultModel, NewLibraryForm } from '../../shared/dialogs/new-library-form/new-library-form';
import { Result, ResultDataModel } from '../../shared/dialogs/result/result';

@Component({
  imports: [
    MatSidenavContainer, MatSidenav, MatButton, MatIcon, MatSidenavContent, MatMiniFabButton,
    MatTooltip, ShelfCard,
  ],
  selector: 'app-shelf-list',
  styleUrl: './shelf-list.css',
  templateUrl: './shelf-list.html',
})
export class ShelfList {
  readonly shelfIds = input.required<string[]>();
  readonly isMine = input(false);
  readonly parentLibId = input<string>();
  readonly reload = output<any>();

  dialog = inject(MatDialog);
  shelfService = inject(ShelfService);
  identityService = inject(IdentityService);

  sidenavOpen = signal(true);
  displayWaitSpinner = signal(false);

  constructor() { }

  toggleSidenavOpen() {
    this.sidenavOpen.update(v => !v);
  }

  openNewShelfForm() {
    if (!this.isMine() || !this.parentLibId()) {
      return;
    }
    this.identityService.getAntiForgeryToken.reload();
    this.dialog.open<NewLibraryForm, undefined, NewLibrary_ResultModel>(NewLibraryForm)
      .afterClosed().subscribe((result) => {
        if (result) {
          this.displayWaitSpinner.set(true);
          this.shelfService.submitNewShelf({ newShelfModel: result, parentLibId: this.parentLibId()! }).subscribe({
            next: res => {
              if (res && res.success) {
                this.reload.emit(undefined);
                this.displayWaitSpinner.set(false);
              }
            },
            error: err => {
              this.displayWaitSpinner.set(false);
              this.dialog.open<Result, ResultDataModel>(Result, {
                data: {
                  description: [
                    'Something went wrong during submitting the new shelf!',
                    'Please try later.'
                  ],
                  title: 'Submit Error',
                  status: 'warning'
                }
              });
              throw (err);
            }
          });
        }
      });
  }
}
