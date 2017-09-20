import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2FirstTreeComponent } from './ng2-first-tree.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    Ng2FirstTreeComponent,
  ],
  exports: [
    Ng2FirstTreeComponent,
  ],
})
export class Ng2FirstTreeModule {
}
