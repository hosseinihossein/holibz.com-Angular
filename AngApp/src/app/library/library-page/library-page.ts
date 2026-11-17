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
import { CardTag } from '../../shared/components/card-tag/card-tag';
import { ShelfList } from '../../shelf/shelf-list/shelf-list';
import { ShelfService } from '../../shelf/shelf-service';

@Component({
  imports: [MatCard, MatCardHeader, MatIcon, MatCardTitle, MatCardSubtitle, MatCardContent,
    MatCardActions, RouterLink, MatButton, NgOptimizedImage, CardTag, ShelfList
  ],
  selector: 'app-library-page',
  styleUrl: './library-page.css',
  templateUrl: './library-page.html',
})
export class LibraryPage {
  readonly activatedRoute = inject(ActivatedRoute);
  readonly identityService = inject(IdentityService);
  readonly libService = inject(LibraryService);
  readonly shelfService = inject(ShelfService);

  private params = toSignal(this.activatedRoute.paramMap);
  readonly libId = computed(() => this.params()?.get("libId"));

  libCardInfo = httpResource<LibraryCardModel>(() =>
    this.libService.libraryCardInfo_Url + this.libId()
  );

  readonly isMine = computed(() => this.identityService.isAuthenticated() &&
    this.libCardInfo.hasValue() &&
    this.libCardInfo.value().ownerId === this.identityService.myIdentityInfo.value()?.id
  );

  ownerUsernameResource = httpResource<{ username: string }>(() => {
    const cardInfo = this.libCardInfo.value();
    return this.isMine() && cardInfo ?
      this.identityService.GetUsername_Url + cardInfo.ownerId :
      undefined
  });
  ownerUsername = computed(() =>
    this.isMine() ?
      this.identityService.myIdentityInfo.value()?.userName :
      this.ownerUsernameResource.value()?.username
  );

  readonly shelfIds = httpResource<{ shelfIds: string[] }>(() =>
    this.libId() ?
      this.shelfService.GetShelfIdsOfLib_Url + this.libId() :
      undefined
  );

  constructor() { }
}
