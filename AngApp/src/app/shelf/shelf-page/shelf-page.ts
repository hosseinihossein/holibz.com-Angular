import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardTag } from '../../shared/components/card-tag/card-tag';
import { IdentityService } from '../../identity/identity-service';
import { ShelfService } from '../shelf-service';
import { DocumentService } from '../../document/document-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { httpResource } from '@angular/common/http';
import { ShelfCardInfo } from '../shelf-card/shelf-card';
import { DocumentList } from '../../document/document-list/document-list';

@Component({
  imports: [MatCard, MatCardHeader, MatIcon, MatCardTitle, MatCardSubtitle, MatCardContent,
    MatCardActions, RouterLink, MatButton, NgOptimizedImage, CardTag, DocumentList
  ],
  selector: 'app-shelf-page',
  styleUrl: './shelf-page.css',
  templateUrl: './shelf-page.html',
})
export class ShelfPage {
  readonly activatedRoute = inject(ActivatedRoute);
  readonly identityService = inject(IdentityService);
  readonly shelfService = inject(ShelfService);
  readonly docService = inject(DocumentService);

  private params = toSignal(this.activatedRoute.paramMap);
  readonly shelfId = computed(() => this.params()?.get("shelfId"));

  shelfCardInfo = httpResource<ShelfCardInfo>(() =>
    this.shelfService.GetShelfCardInfo_Url + this.shelfId()
  );

  readonly isMine = computed(() => this.identityService.isAuthenticated() &&
    !!this.shelfCardInfo.value() &&
    this.shelfCardInfo.value()?.ownerId === this.identityService.myIdentityInfo.value()?.id
  );

  ownerUsernameResource = httpResource<{ username: string }>(() => {
    const cardInfo = this.shelfCardInfo.value();
    return this.isMine() && cardInfo ?
      this.identityService.GetUsername_Url + cardInfo.ownerId :
      undefined
  });
  ownerUsername = computed(() =>
    this.isMine() ?
      this.identityService.myIdentityInfo.value()?.userName :
      this.ownerUsernameResource.value()?.username
  );

  readonly docIds = httpResource<{ docIds: string[] }>(() =>
    this.shelfId() ?
      this.docService.GetDocIdsOfShelf_Url + this.shelfId() :
      undefined
  );

  constructor() { }

}
