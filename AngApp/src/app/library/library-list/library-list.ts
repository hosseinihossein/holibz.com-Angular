import { Component, inject, input, output, signal } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { LibraryCard } from '../library-card/library-card';
import { MatAnchor, MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { NewLibrary_ResultModel, NewLibraryForm } from '../../shared/dialogs/new-library-form/new-library-form';
import { LibraryService } from '../library-service';
import { Result, ResultDataModel as Result_DataModel } from '../../shared/dialogs/result/result';
import { MatTooltip } from '@angular/material/tooltip';
import { IdentityService } from '../../identity/identity-service';

@Component({
  imports: [MatSidenavContainer, MatSidenav, MatSidenavContent, LibraryCard,
    MatIcon, MatMiniFabButton, MatButton, MatTooltip],
  selector: 'app-library-list',
  styleUrl: './library-list.css',
  templateUrl: './library-list.html',
})
export class LibraryList {
  libIds = input.required<string[]>();
  isMe = input(false);
  reload = output<any>();

  dialog = inject(MatDialog);
  libService = inject(LibraryService);
  identityService = inject(IdentityService);

  sidenavOpen = signal(true);
  displayWaitSpinner = signal(false);

  constructor() { }

  toggleSidenavOpen() {
    this.sidenavOpen.update(v => !v);
  }

  openNewLibraryForm() {
    this.identityService.getAntiForgeryToken.reload();
    this.dialog.open<NewLibraryForm, undefined, NewLibrary_ResultModel>(NewLibraryForm)
      .afterClosed().subscribe((result) => {
        if (result) {
          this.displayWaitSpinner.set(true);
          this.libService.submitNewLibrary(result).subscribe({
            next: res => {
              if (res && res.success) {
                this.reload.emit(undefined);
                this.displayWaitSpinner.set(false);
              }
            },
            error: err => {
              this.displayWaitSpinner.set(false);
              this.dialog.open<Result, Result_DataModel>(Result, {
                data: {
                  description: [
                    'Something went wrong during submitting the new library!',
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
