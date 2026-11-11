import { Routes } from "@angular/router";

export const identityRoutes: Routes = [
    { path: 'Identity/Login', loadComponent: () => import('./login/login').then(m => m.Login) },
    { path: 'Identity/Signup', loadComponent: () => import('./signup/signup').then(m => m.Signup) },
    { path: 'Identity/Setting', loadComponent: () => import('./setting/setting').then(m => m.Setting) },
    { path: 'Identity/ResetPassword', loadComponent: () => import('./reset-password/reset-password').then(m => m.ResetPassword) },
];