import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@_components/footer/footer.component';
import { HeaderBarComponent } from '@_components/header-bar/header-bar.component';
import { HomeComponent } from '@_components/home-module/home/home.component';
import { PageNotFoundComponentComponent } from '@_components/page-not-found-component/page-not-found-component.component';
import { SandboxComponent } from '@_components/sandbox-module/sandbox/sandbox.component';
import { AppComponent } from './app.component';
import { AppResolver } from './app.resolver';
import { appRoutes } from './app.routing';
import { FunFactDisplayComponent } from './components/sandbox-module/fun-fact-display/fun-fact-display.component';
import { FunFactComponent } from './components/sandbox-module/fun-fact/fun-fact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponentComponent,
    SandboxComponent,
    FunFactComponent,
    FunFactDisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [AppResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
