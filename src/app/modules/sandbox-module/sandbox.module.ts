import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FunFactDisplayComponent } from './fun-fact-display/fun-fact-display.component';
import { FunFactComponent } from './fun-fact/fun-fact.component';
import { SandboxRouting } from './sandbox.routing';
import { SandboxComponent } from './sandbox/sandbox.component';
import { FunFactCodeComponent } from './fun-fact-code/fun-fact-code.component';

@NgModule({
  imports: [CommonModule, SandboxRouting, MatIconModule, MatCardModule, MatButtonModule],
  declarations: [SandboxComponent, FunFactComponent, FunFactDisplayComponent, FunFactCodeComponent]
})
export class SandboxModule {
  constructor() {}
}
