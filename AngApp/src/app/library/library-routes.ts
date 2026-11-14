import { Routes } from "@angular/router";

export const libraryRoutes: Routes = [
    {
        path: 'Library/:libId',
        loadComponent: () => import('./library-page/library-page').then(m => m.LibraryPage),
    },
];