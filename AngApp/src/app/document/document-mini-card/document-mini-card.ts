import { NgOptimizedImage } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, inject, input, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { DocumentService } from '../document-service';

@Component({
  imports: [
    MatCard, MatCardHeader, NgOptimizedImage, MatCardTitle, MatCardContent
  ],
  selector: 'app-document-mini-card',
  styleUrl: './document-mini-card.css',
  templateUrl: './document-mini-card.html',
})
export class DocumentMiniCard {
  readonly docId = input.required<string>();

  readonly docService = inject(DocumentService);

  readonly docCardInfo = httpResource<DocMiniCardInfo>(() =>
    this.docService.GetDocMiniCardInfo_Url + this.docId()
  );

  readonly appearance = signal<"outlined" | "raised" | "filled">("outlined");

  constructor() { }

  raiseCard() {
    this.appearance.set("raised");
  }
  outlineCard() {
    this.appearance.set("outlined");
  }
}

export interface DocMiniCardInfo {
  title: string;
  description?: string | null;
  imageUrl?: string | null;
}
