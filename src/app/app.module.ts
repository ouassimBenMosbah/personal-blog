import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '@_components/footer/footer.component';
import { HeaderBarComponent } from '@_components/header-bar/header-bar.component';
import { HomeComponent } from '@_components/home-module/home/home.component';
import { PageNotFoundComponentComponent } from '@_components/page-not-found-component/page-not-found-component.component';
import { SandboxComponent } from '@_components/sandbox-module/sandbox/sandbox.component';
import { AppComponent } from './app.component';
import { AppResolver } from './app.resolver';
import { FunFactComponent } from './components/sandbox-module/fun-fact/fun-fact.component';

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
    SandboxComponent,
    FunFactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [AppResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
