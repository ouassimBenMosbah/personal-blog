import { Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/modules/shared/page-not-found/page-not-found.component';
import { AppResolver } from './app.resolver';

export const appRoutes: Routes = [
  {
    path: '',
    resolve: {
      app: AppResolver
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home-module/home.module').then(mod => mod.HomeModule)
        // canActivate: [AuthGuardAppService]
      },
      {
        path: 'blog',
        loadChildren: () => import('./modules/blog-module/blog.module').then(mod => mod.BlogModule)
        // canActivate: [AuthGuardAppService]
      },
      {
        path: 'sandbox',
        loadChildren: () =>
          import('./modules/sandbox-module/sandbox.module').then(mod => mod.SandboxModule)
        // canActivate: [AuthGuardAppService]
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];
