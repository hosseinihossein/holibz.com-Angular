import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [MatIcon],
  selector: 'app-card-tag',
  styleUrl: './card-tag.css',
  templateUrl: './card-tag.html',
})
export class CardTag {
  iconName = input.required<string>();
  tagName = input.required<string>();
}
