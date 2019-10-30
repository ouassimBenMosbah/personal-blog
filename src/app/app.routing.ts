import { Routes } from '@angular/router';
import { HomeComponent } from '@_components/home-module/home/home.component';
import { PageNotFoundComponentComponent } from '@_components/page-not-found-component/page-not-found-component.component';
import { SandboxComponent } from '@_components/sandbox-module/sandbox/sandbox.component';
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
  { path: '**', component: PageNotFoundComponentComponent }
];
