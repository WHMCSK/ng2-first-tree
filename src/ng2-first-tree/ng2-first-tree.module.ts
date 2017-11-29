import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2FirstTreeComponent } from './ng2-first-tree.component';

// tree 折叠展开组件
import { FoldedExpansionComponent } from './components/foldedExpansion/foldedExpansion.component';
// tree 搜索组件
import { FilterComponent } from './components/fliter/filter.componet';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    Ng2FirstTreeComponent,
    // tree 折叠展开组件
    FoldedExpansionComponent,
    // tree 搜索组件
    FilterComponent,
  ],
  exports: [
    Ng2FirstTreeComponent,
  ],
})
export class Ng2FirstTreeModule {
}
