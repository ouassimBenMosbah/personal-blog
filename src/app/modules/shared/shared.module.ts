import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SafePipe } from './pipes/safe.pipe';
import { StackblitzDisplayComponent } from './stackblitz-display/stackblitz-display.component';

@NgModule({
  imports: [CommonModule],
  exports: [FooterComponent, HeaderBarComponent, StackblitzDisplayComponent],
  declarations: [
    FooterComponent,
    HeaderBarComponent,
    PageNotFoundComponent,
    StackblitzDisplayComponent,
    SafePipe
  ]
})
export class SharedModule {
  constructor() {}
}
