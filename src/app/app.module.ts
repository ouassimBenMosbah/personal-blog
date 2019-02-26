import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppResolver } from './app.resolver';
import { FooterComponent } from './footer/footer.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HomeComponent } from './home/home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { SandboxComponent } from './sandbox/sandbox/sandbox.component';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponentComponent,
    SandboxComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule],
  providers: [AppResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
