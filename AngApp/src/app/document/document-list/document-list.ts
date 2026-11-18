import { Component, inject, input, output, signal } from '@angular/core';
import { DocumentCard } from '../document-card/document-card';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { MatTooltip } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DocumentService } from '../document-service';
import { IdentityService } from '../../identity/identity-service';
import { NewLibrary_ResultModel, NewLibraryForm } from '../../shared/dialogs/new-library-form/new-library-form';
import { Result, ResultDataModel } from '../../shared/dialogs/result/result';

@Component({
  imports: [MatSidenavContainer, MatSidenav, MatButton, MatIcon, MatSidenavContent, MatMiniFabButton,
    MatTooltip, DocumentCard
  ],
  selector: 'app-document-list',
  styleUrl: './document-list.css',
  templateUrl: './document-list.html',
})
export class DocumentList {
  readonly docIds = input.required<string[]>();
  readonly isMine = input(false);
  readonly parentShelfId = input<string>();
  readonly reload = output<any>();

  dialog = inject(MatDialog);
  docService = inject(DocumentService);
  identityService = inject(IdentityService);

  sidenavOpen = signal(true);
  displayWaitSpinner = signal(false);

  constructor() { }

  toggleSidenavOpen() {
    this.sidenavOpen.update(v => !v);
  }

  openNewDocForm() {
    if (!this.isMine() || !this.parentShelfId()) {
      return;
    }
    this.identityService.getAntiForgeryToken.reload();
    this.dialog.open<NewLibraryForm, undefined, NewLibrary_ResultModel>(NewLibraryForm)
      .afterClosed().subscribe((result) => {
        if (result) {
          this.displayWaitSpinner.set(true);
          this.docService.submitNewDocument({ newDocumentModel: result, parentShelfId: this.parentShelfId()! }).subscribe({
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
                    'Something went wrong during submitting the new document!',
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
