import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppResolver } from './app.resolver';
import { FooterComponent } from './footer/footer.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HomeComponent } from './home/home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const appRoutes: Routes = [
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
        data: { title: 'Home' }
        // canActivate: [AuthGuardAppService]
      },
      {
        path: 'sandbox',
        component: HomeComponent,
        data: { title: 'sandbox' }
        // canActivate: [AuthGuardAppService]
      }
    ]
  },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponentComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [AppResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
