import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogContainerComponent } from './blog-container/blog-container.component';

const routes: Routes = [
  {
    path: '',
    component: BlogContainerComponent,
    data: { title: 'Blog', animation: 'blogPage', url: 'blog', order: 1 }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRouting {}
