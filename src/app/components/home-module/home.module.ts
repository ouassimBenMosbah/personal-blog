import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from '@_components/home-module/home/home.component';
import { HomeRouting } from './home.routing';

@NgModule({
  imports: [CommonModule, HomeRouting],
  declarations: [HomeComponent]
})
export class HomeModule {
  constructor() {}
}
