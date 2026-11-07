import { Routes } from '@angular/router';
import { Home } from './home/home';
import { identityRoutes } from './identity/identity.routes';
import { userAccountRoutes } from './user-account/user-account-routes';

export const routes: Routes = [
    {path: '', component: Home},
    ...identityRoutes,
    ...userAccountRoutes,
];
