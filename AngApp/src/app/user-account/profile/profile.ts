import { NgOptimizedImage } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { MatButton, MatAnchor } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WaitSpinner } from '../../shared/wait-spinner/wait-spinner';
import { IdentityService } from '../../identity/identity-service';
import { ProfileService } from './profile-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { firstValueFrom } from 'rxjs';
import { httpResource, HttpResourceRef } from '@angular/common/http';
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
  router = inject(Router);

  private params = toSignal(this.activatedRoute.paramMap)
  userId = computed(() =>
    this.params()?.get("userId") ?? this.identityService.myIdentityInfo.value()?.id
  );
  isMe = computed(() => this.userId() && this.userId() === this.identityService.myIdentityInfo.value()?.id);

  profileInfo = httpResource<UserProfileInfo>(() => this.profileService.getProfileInfo_Url + this.userId());
  profileUsername = httpResource<{ username: string }>(() => this.identityService.getUsername_Url + this.userId());

  displayWaitSpinner = signal(false);

  constructor() {
    if (!this.userId()) {
      this.router.navigate(['/Identity/Login']);
    }
  }

}

export interface UserProfileInfo {
  avatarUrl?: string | null;
  name?: string | null;
  description?: string | null;
}
