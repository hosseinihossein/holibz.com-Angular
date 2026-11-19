import { Routes } from "@angular/router";

export const documentRoutes: Routes = [
    {
        path: 'Document/:docId',
        loadComponent: () => import('./document-page/document-page').then(m => m.DocumentPage),
    },
];