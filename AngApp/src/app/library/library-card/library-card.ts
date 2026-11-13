import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { Component, effect, inject, input, PLATFORM_ID } from '@angular/core';
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
    this.libService.libraryCardInfo_Url + this.libraryId()
  );
  ownerUsername = httpResource<{ username: string }>(() => {
    const cardInfo = this.libCardInfo.value();
    return cardInfo ?
      this.identityService.getUsername_Url + cardInfo.ownerId :
      undefined
  });

  constructor() {
    effect(() => {
      if (this.libCardInfo.hasValue() && this.libCardInfo.value()) {
        console.log("libCardInfo = " + JSON.stringify(this.libCardInfo.value()));
      }
    });
  }

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
