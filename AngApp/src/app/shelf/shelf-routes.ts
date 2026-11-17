import { Routes } from "@angular/router";

export const shelfRoutes: Routes = [
    {
        path: 'Shelf/:shelfId',
        loadComponent: () => import('./shelf-page/shelf-page').then(m => m.ShelfPage),
    },
    {
        path: 'Shelf/Setting/:shelfId',
        loadComponent: () => import('./shelf-page/shelf-setting/shelf-setting').then(m => m.ShelfSetting),
    },
];