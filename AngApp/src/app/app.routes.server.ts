import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Client },
  { path: 'Identity/Login', renderMode: RenderMode.Prerender },
  { path: 'Identity/Signup', renderMode: RenderMode.Prerender },
  { path: 'Identity/ResetPassword', renderMode: RenderMode.Prerender },
  { path: 'Identity/Setting', renderMode: RenderMode.Client },
  { path: 'UserAccount/Profile/:userId', renderMode: RenderMode.Client },
  { path: 'UserAccount/Profile', renderMode: RenderMode.Client },
  { path: 'UserAccount/ProfileSetting', renderMode: RenderMode.Client },
  { path: 'Library/:libId', renderMode: RenderMode.Client },
  /*{
    path: '**',
    renderMode: RenderMode.Prerender
  }*/
];
