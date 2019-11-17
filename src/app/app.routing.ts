import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@_components/shared/page-not-found/page-not-found.component';
import { AppResolver } from './app.resolver';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    resolve: {
      app: AppResolver
    },
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./components/home-module/home.module').then(mod => mod.HomeModule),
        data: { title: 'Home', animation: 'homePage' }
        // canActivate: [AuthGuardAppService]
      },
      {
        path: 'sandbox',
        loadChildren: () =>
          import('./components/sandbox-module/sandbox.module').then(mod => mod.SandboxModule),
        data: { title: 'Sandbox', animation: 'sandboxPage' }
        // canActivate: [AuthGuardAppService]
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];
