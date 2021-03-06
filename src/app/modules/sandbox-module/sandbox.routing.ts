import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandboxComponent } from './sandbox/sandbox.component';

const routes: Routes = [
  {
    path: '',
    component: SandboxComponent,
    data: { title: 'Sandbox', animation: 'sandboxPage', url: 'sandbox', order: 2 }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRouting {}
