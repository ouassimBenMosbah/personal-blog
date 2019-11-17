import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeModule } from '@_components/home-module/home.module';
import { SandboxModule } from '@_components/sandbox-module/sandbox.module';
import { SharedModule } from '@_components/shared/shared.module';
import { AppComponent } from './app.component';
import { AppResolver } from './app.resolver';
import { appRoutes } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SandboxModule,
    SharedModule,
    BrowserModule,
    HomeModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AppResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
