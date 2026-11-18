import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { LibraryService } from '../library-service';
import { httpResource } from '@angular/common/http';
import { IdentityService } from '../../identity/identity-service';

@Component({
  imports: [MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle, MatCardContent,
    MatIcon, NgOptimizedImage, RouterLink],
  selector: 'app-library-card',
  styleUrl: './library-card.css',
  templateUrl: './library-card.html',
  host: {
    "(click)": "openLibrary()",
  }
})
export class LibraryCard {
  libraryId = input.required<string>();

  router = inject(Router);
  libService = inject(LibraryService);
  identityService = inject(IdentityService);

  libCardInfo = httpResource<LibraryCardModel>(() =>
    this.libService.GetLibraryCardInfo_Url + this.libraryId()
  );

  readonly isMine = computed(() =>
    this.identityService.isAuthenticated() && this.libCardInfo.value() &&
    this.libCardInfo.value()?.ownerId === this.identityService.myIdentityInfo.value()?.id
  );

  private readonly otherOwnerUsername = httpResource<{ username?: string | null }>(() =>
    this.isMine() ? undefined :
      this.identityService.GetUsername_Url + this.libCardInfo.value()?.ownerId
  );
  readonly ownerUsername = computed(() => this.libCardInfo.value() && this.isMine() ?
    this.identityService.myIdentityInfo.value()?.userName :
    this.otherOwnerUsername.value()?.username
  );
  /*ownerUsername = httpResource<{ username: string }>(() => {
    const cardInfo = this.libCardInfo.value();
    return cardInfo ?
      this.identityService.GetUsername_Url + cardInfo.ownerId :
      undefined
  });*/

  constructor() { }

  openLibrary() {
    this.router.navigate(["/Library", this.libraryId()]);
  }
}

export interface LibraryCardModel {
  id: string;
  ownerId: string;
  title: string;
  description?: string | null;
  imageUrl?: string | null;
}
