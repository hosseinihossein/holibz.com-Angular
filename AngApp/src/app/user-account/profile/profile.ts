import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatButton, MatAnchor } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WaitSpinner } from '../../shared/wait-spinner/wait-spinner';
import { IdentityService } from '../../identity/identity-service';
import { ProfileService } from './profile-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { httpResource } from '@angular/common/http';
import { Mainboard } from '../mainboard/mainboard';

@Component({
  imports: [MatCardModule, MatIcon, MatButton, NgOptimizedImage, WaitSpinner,
    MatAnchor, RouterLink, Mainboard],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  identityService = inject(IdentityService);
  profileService = inject(ProfileService);
  activatedRoute = inject(ActivatedRoute);

  private params = toSignal(this.activatedRoute.paramMap)
  userId = computed(() =>
    this.params()?.get("userId") ?? this.identityService.myIdentityInfo.value()?.id
  );
  isMe = computed(() => this.userId() && this.userId() === this.identityService.myIdentityInfo.value()?.id);

  profileInfo = httpResource<UserProfileInfo>(() =>
    this.identityService.isAuthenticated() ?
      this.profileService.getProfileInfo_Url + this.userId() :
      undefined
  );
  profileUsername = httpResource<{ username: string }>(() =>
    this.identityService.isAuthenticated() ?
      this.identityService.getUsername_Url + this.userId() :
      undefined
  );

  displayWaitSpinner = signal(false);

  constructor() { }

}

export interface UserProfileInfo {
  avatarUrl?: string | null;
  name?: string | null;
  description?: string | null;
}
