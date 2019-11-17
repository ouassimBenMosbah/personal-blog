import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '@_components/home-module/home/home.component';
import { SandboxComponent } from '@_components/sandbox-module/sandbox/sandbox.component';
import { SharedModule } from '@_components/shared/shared.module';
import { AppComponent } from './app.component';
import { AppResolver } from './app.resolver';
import { appRoutes } from './app.routing';
import { FunFactDisplayComponent } from './components/sandbox-module/fun-fact-display/fun-fact-display.component';
import { FunFactComponent } from './components/sandbox-module/fun-fact/fun-fact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SandboxComponent,
    FunFactComponent,
    FunFactDisplayComponent
  ],
  imports: [
    SharedModule,
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
