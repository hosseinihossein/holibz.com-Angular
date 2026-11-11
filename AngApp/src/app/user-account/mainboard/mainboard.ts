import { Component, input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  imports: [MatTabsModule,],
  selector: 'app-mainboard',
  styleUrl: './mainboard.css',
  templateUrl: './mainboard.html',
})
export class Mainboard {
  userId = input.required<string>();

}
