import { NgOptimizedImage } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, computed, inject, input } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { IdentityService } from '../../identity/identity-service';
import { ProfileService } from '../../user-account/profile/profile-service';
import { DocCardInfo } from '../document-card/document-card';
import { DocumentService } from '../document-service';
import { CardTag } from '../../shared/components/card-tag/card-tag';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
  imports: [
    MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions,
    MatButton, MatIconButton, MatIcon, MatTooltip, NgOptimizedImage, RouterLink, CardTag,
    MatMenu, MatMenuItem, MatMenuTrigger,
  ],
  selector: 'app-document-page',
  styleUrl: './document-page.css',
  templateUrl: './document-page.html',
})
export class DocumentPage {
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

  constructor() { }
}
