import { Component, computed, inject, signal } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { toSignal } from '@angular/core/rxjs-interop';
import { httpResource } from '@angular/common/http';
import { LibraryCardModel } from '../library-card/library-card';
import { IdentityService } from '../../identity/identity-service';
import { LibraryService } from '../library-service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [MatCard, MatCardHeader, MatIcon, MatCardTitle, MatCardSubtitle, MatCardContent,
    MatCardActions, RouterLink, MatButton, NgOptimizedImage
  ],
  selector: 'app-library-page',
  styleUrl: './library-page.css',
  templateUrl: './library-page.html',
})
export class LibraryPage {
  readonly activatedRoute = inject(ActivatedRoute);
  readonly identityService = inject(IdentityService);
  readonly libService = inject(LibraryService);

  private params = toSignal(this.activatedRoute.paramMap);
  readonly libId = computed(() => this.params()?.get("libId"));

  libCardInfo = httpResource<LibraryCardModel>(() =>
    this.libService.libraryCardInfo_Url + this.libId()
  );

  readonly isMe = computed(() => this.identityService.isAuthenticated() &&
    this.libCardInfo.hasValue() &&
    this.libCardInfo.value().ownerId === this.identityService.myIdentityInfo.value()?.id
  );

  ownerUsernameResource = httpResource<{ username: string }>(() => {
    const cardInfo = this.libCardInfo.value();
    return this.isMe() && cardInfo ?
      this.identityService.getUsername_Url + cardInfo.ownerId :
      undefined
  });
  ownerUsername = computed(() =>
    this.isMe() ?
      this.identityService.myIdentityInfo.value()?.userName :
      this.ownerUsernameResource.value()?.username
  );

  constructor() { }
}
