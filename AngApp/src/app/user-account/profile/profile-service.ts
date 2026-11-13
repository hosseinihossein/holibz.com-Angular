import { HttpClient, HttpParams, httpResource } from '@angular/common/http';
import { effect, inject, Service } from '@angular/core';
import { IdentityService } from '../../identity/identity-service';
import { UserProfileInfo } from './profile';
import { tap } from 'rxjs';

@Service()
export class ProfileService {
  private readonly httpClient = inject(HttpClient);
  private readonly identityService = inject(IdentityService);

  readonly getProfileInfo_Url = "/api/UserProfile/GetProfileInfo?userId=";

  readonly myProfileInfo = httpResource<UserProfileInfo>(() =>
    this.identityService.isAuthenticated() ?
      `${this.getProfileInfo_Url}${this.identityService.myIdentityInfo.value()?.id}` :
      undefined,
    {
      parse: (res: any) => {
        console.log("myProfileInfo res = " + JSON.stringify(res));
        return {
          avatarUrl: res.avatarUrl,
          description: res.description,
          name: res.name,
        };
      }
    }
  );

  constructor() {
    effect(() => {
      if (this.myProfileInfo.hasValue() && this.myProfileInfo.value()) {
        console.log("myProfileInfo = " + JSON.stringify(this.myProfileInfo.value()));
      }
    });
  }

  getUserAvatarUrl(userId: string) {
    let httpParams = new HttpParams().set('userId', userId);
    return this.httpClient.get<{ avatarUrl: string }>(
      "/api/UserProfile/GetUserAvatarUrl",
      { params: httpParams }
    );
  }

  saveUserAvatar(image: File) {
    const formData = new FormData();
    formData.append('userImageFile', image);
    return this.httpClient.post<{ success: boolean }>(
      "/api/UserProfile/SubmitUserImage", formData
    ).pipe(
      tap({
        next: res => {
          if (res && res.success) {
            this.myProfileInfo.reload();
          }
        }
      })
    );
  }

  deleteUserAvatar() {
    return this.httpClient.delete<{ success: boolean }>(
      "/api/UserProfile/DeleteUserImage"
    ).pipe(
      tap({
        next: res => {
          if (res && res.success) {
            this.myProfileInfo.reload();
          }
        }
      })
    );
  }

  changeName(name: string) {
    let httpParams = new HttpParams().set("name", name);
    return this.httpClient.post<{ success: boolean }>(
      `/api/UserProfile/SubmitProfileName`, httpParams
    ).pipe(
      tap({
        next: res => {
          if (res && res.success) {
            this.myProfileInfo.reload();
          }
        }
      })
    );
  }

  changeDescription(description: string) {
    let httpParams = new HttpParams().set("description", description);
    return this.httpClient.post<{ success: boolean }>(
      `/api/UserProfile/SubmitDescription`, httpParams
    ).pipe(
      tap({
        next: res => {
          if (res && res.success) {
            this.myProfileInfo.reload();
          }
        }
      })
    );
  }

}

