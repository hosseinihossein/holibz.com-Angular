import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { DocumentService } from '../document-service';
import { httpResource } from '@angular/common/http';
import { IdentityService } from '../../identity/identity-service';
import { ProfileService } from '../../user-account/profile/profile-service';
import { CardTag } from '../../shared/components/card-tag/card-tag';

@Component({
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions,
    MatButton, MatIconButton, MatIcon, MatTooltip, NgOptimizedImage, RouterLink, CardTag
  ],
  selector: 'app-document-card',
  styleUrl: './document-card.css',
  templateUrl: './document-card.html',
})
export class DocumentCard {
  readonly docId = input.required<string>();

  readonly docService = inject(DocumentService);
  readonly identityService = inject(IdentityService);
  readonly profileService = inject(ProfileService);

  readonly docCardInfo = httpResource<DocCardInfo>(() =>
    this.docService.GetDocCardInfo_Url + this.docId()
  );

  readonly isMine = computed(() =>
    this.identityService.isAuthenticated() && this.docCardInfo.value() &&
    this.docCardInfo.value()?.ownerId === this.identityService.myIdentityInfo.value()?.id
  );

  private readonly otherOwnerUsername = httpResource<{ username?: string | null }>(() => {
    if (this.docCardInfo.value()) {
      return this.isMine() ? undefined :
        this.identityService.GetUsername_Url + this.docCardInfo.value()?.ownerId
    }
    else return undefined;
  });
  readonly ownerUsername = computed(() => this.docCardInfo.value() && this.isMine() ?
    this.identityService.myIdentityInfo.value()?.userName :
    this.otherOwnerUsername.value()?.username
  );

  private readonly otherOwnerAvatarUrl = httpResource<{ avatarUrl: string }>(() => {
    if (this.docCardInfo.value()) {
      return this.isMine() ? undefined :
        this.profileService.GetAvatarUrl_Url + this.docCardInfo.value()?.ownerId
    }
    else return undefined;
  },
    { parse: (res: any) => res === null ? undefined : res }
  );
  readonly ownerAvatarUrl = computed(() => this.docCardInfo.value() && this.isMine() ?
    this.profileService.myProfileInfo.value()?.avatarUrl :
    this.otherOwnerAvatarUrl.value()?.avatarUrl
  );

  readonly appearance = signal<"outlined" | "raised" | "filled">("outlined");

  constructor() { }

  raiseCard() {
    this.appearance.set("raised");
  }
  outlineCard() {
    this.appearance.set("outlined");
  }
  removeDocumentFromParentShelf() {
    if (this.isMine() && this.docCardInfo.value()) {
      //this.removeFromShelf.emit(this.documentCardModel()!.guid);
    }
  }
}

export interface DocCardInfo {
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  ownerId: string;
}