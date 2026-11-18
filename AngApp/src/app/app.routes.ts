import { Routes } from '@angular/router';
import { Home } from './home/home';
import { identityRoutes } from './identity/identity.routes';
import { userAccountRoutes } from './user-account/user-account-routes';
import { libraryRoutes } from './library/library-routes';
import { shelfRoutes } from './shelf/shelf-routes';
import { documentRoutes } from './document/document-routes';

export const routes: Routes = [
    { path: '', component: Home },
    ...identityRoutes,
    ...userAccountRoutes,
    ...libraryRoutes,
    ...shelfRoutes,
    ...documentRoutes,
];
