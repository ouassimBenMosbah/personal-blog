import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule],
  exports: [FooterComponent, HeaderBarComponent],
  declarations: [FooterComponent, HeaderBarComponent, PageNotFoundComponent]
})
export class SharedModule {
  constructor() {}
}
