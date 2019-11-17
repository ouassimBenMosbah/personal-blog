import { Routes } from '@angular/router';
import { HomeComponent } from '@_components/home-module/home/home.component';
import { SandboxComponent } from '@_components/sandbox-module/sandbox/sandbox.component';
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
        component: HomeComponent,
        data: { title: 'Home', animation: 'homePage' }
        // canActivate: [AuthGuardAppService]
      },
      {
        path: 'sandbox',
        component: SandboxComponent,
        data: { title: 'Sandbox', animation: 'sandboxPage' }
        // canActivate: [AuthGuardAppService]
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];
