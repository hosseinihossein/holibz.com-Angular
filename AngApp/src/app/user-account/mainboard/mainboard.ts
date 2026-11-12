import { Component, computed, inject, input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { LibraryList } from '../../library/library-list/library-list';
import { LibraryService } from '../../library/library-service';
import { httpResource } from '@angular/common/http';
import { IdentityService } from '../../identity/identity-service';

@Component({
  imports: [MatTabsModule, LibraryList],
  selector: 'app-mainboard',
  styleUrl: './mainboard.css',
  templateUrl: './mainboard.html',
})
export class Mainboard {
  userId = input.required<string>();

  identityServise = inject(IdentityService);
  libService = inject(LibraryService);

  libIdsResource = httpResource<{ libIds: string[] }>(() => this.libService.getLibraryIds_Url + this.userId());

  isMe = computed(() => this.identityServise.isAuthenticated() &&
    this.userId() === this.identityServise.myIdentityInfo.value()?.id
  );

}
