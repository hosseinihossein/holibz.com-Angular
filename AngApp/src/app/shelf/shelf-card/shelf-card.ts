import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { ShelfService } from '../shelf-service';
import { httpResource } from '@angular/common/http';
import { MatBadge } from '@angular/material/badge';
import { ProfileService } from '../../user-account/profile/profile-service';
import { IdentityService } from '../../identity/identity-service';
import { Router, RouterLink } from '@angular/router';
import { DocumentService } from '../../document/document-service';
import { DocumentMiniCard } from '../../document/document-mini-card/document-mini-card';

@Component({
  imports: [MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle,
    MatExpansionPanelDescription, MatIcon, NgOptimizedImage, MatTooltip, MatExpansionPanelActionRow,
    MatButton, MatBadge, DocumentMiniCard, RouterLink],
  selector: 'app-shelf-card',
  styleUrl: './shelf-card.css',
  templateUrl: './shelf-card.html',
})
export class ShelfCard {
  readonly shelfId = input.required<string>();

  readonly shelfService = inject(ShelfService);
  readonly profileService = inject(ProfileService);
  readonly identityService = inject(IdentityService);
  readonly router = inject(Router);
  readonly docService = inject(DocumentService);

  readonly shelfCardInfo = httpResource<ShelfCardInfo>(() =>
    this.shelfService.GetShelfCardInfo_Url + this.shelfId()
  );

  readonly isMine = computed(() =>
    this.identityService.isAuthenticated() && this.shelfCardInfo.value() &&
    this.shelfCardInfo.value()?.ownerId === this.identityService.myIdentityInfo.value()?.id
  );

  private readonly otherOwnerUsername = httpResource<{ username?: string | null }>(() => {
    if (this.shelfCardInfo.value()) {
      return this.isMine() ? undefined :
        this.identityService.GetUsername_Url + this.shelfCardInfo.value()?.ownerId
    }
    else return undefined;
  });
  readonly ownerUsername = computed(() => this.shelfCardInfo.value() && this.isMine() ?
    this.identityService.myIdentityInfo.value()?.userName :
    this.otherOwnerUsername.value()?.username
  );

  private readonly otherOwnerAvatarUrl = httpResource<{ avatarUrl: string }>(() => {
    if (this.shelfCardInfo.value()) {
      return this.isMine() ? undefined :
        this.profileService.GetAvatarUrl_Url + this.shelfCardInfo.value()?.ownerId
    }
    else return undefined;
  },
    { parse: (res: any) => res === null ? undefined : res }
  );
  readonly ownerAvatarUrl = computed(() => this.shelfCardInfo.value() && this.isMine() ?
    this.profileService.myProfileInfo.value()?.avatarUrl :
    this.otherOwnerAvatarUrl.value()?.avatarUrl
  );

  readonly docIds = httpResource<{ docIds: string[] }>(() =>
    this.docService.GetDocIdsOfShelf_Url + this.shelfId()
  );

  constructor() { }

  openShelf() {
    this.router.navigate(["/Shelf", this.shelfId()]);
  }

}

export interface ShelfCardInfo {
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  ownerId: string;
  totalNumberOfDocs: number;
}
