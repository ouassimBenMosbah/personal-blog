import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogContainerComponent } from './blog-container/blog-container.component';
import { BlogRouting } from './blog.routing';

@NgModule({
  imports: [CommonModule, BlogRouting],
  declarations: [BlogContainerComponent]
})
export class BlogModule {
  constructor() {}
}
