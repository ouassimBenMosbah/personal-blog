import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeModule } from 'src/app/modules/home-module/home.module';
import { SandboxModule } from 'src/app/modules/sandbox-module/sandbox.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AppComponent } from './app.component';
import { AppResolver } from './app.resolver';
import { appRoutes } from './app.routing';
import { BlogModule } from './modules/blog-module/blog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BlogModule,
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
