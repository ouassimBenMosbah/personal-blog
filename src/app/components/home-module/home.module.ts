import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from '@_components/home-module/home/home.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent]
})
export class HomeModule {
  constructor() {}
}