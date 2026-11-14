import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatButton, MatAnchor } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IdentityService } from '../../identity/identity-service';
import { ProfileService } from './profile-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { httpResource } from '@angular/common/http';
import { Mainboard } from '../mainboard/mainboard';
import { CardTag } from '../../shared/components/card-tag/card-tag';

@Component({
  imports: [MatCardModule, MatIcon, MatButton, NgOptimizedImage,
    MatAnchor, RouterLink, Mainboard, CardTag],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  readonly identityService = inject(IdentityService);
  readonly profileService = inject(ProfileService);
  readonly activatedRoute = inject(ActivatedRoute);

  private readonly params = toSignal(this.activatedRoute.paramMap);
  readonly userId = computed(() =>
    this.params()?.get("userId") ?? this.identityService.myIdentityInfo.value()?.id
  );
  readonly isMe = computed(() => this.userId() && this.userId() === this.identityService.myIdentityInfo.value()?.id);

  readonly profileInfo = httpResource<UserProfileInfo>(() =>
    this.identityService.isAuthenticated() ?
      this.profileService.getProfileInfo_Url + this.userId() :
      undefined
  );
  readonly profileUsername = httpResource<{ username: string }>(() =>
    this.identityService.isAuthenticated() ?
      this.identityService.getUsername_Url + this.userId() :
      undefined
  );

  constructor() { }

}

export interface UserProfileInfo {
  avatarUrl?: string | null;
  name?: string | null;
  description?: string | null;
}
