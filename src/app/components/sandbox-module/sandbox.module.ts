import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { FunFactDisplayComponent } from './fun-fact-display/fun-fact-display.component';
import { FunFactComponent } from './fun-fact/fun-fact.component';
import { SandboxRouting } from './sandbox.routing';
import { SandboxComponent } from './sandbox/sandbox.component';

@NgModule({
  imports: [CommonModule, SandboxRouting, MatIconModule, MatCardModule, MatButtonModule],
  declarations: [SandboxComponent, FunFactComponent, FunFactDisplayComponent]
})
export class SandboxModule {
  constructor() {}
}
