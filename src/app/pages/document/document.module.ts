import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { routes } from './document.routes';

import { DocumentComponent } from './document.component';

import { Ng2FirstTreeModule } from '../../../ng2-first-tree';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    Ng2FirstTreeModule,
  ],
  declarations: [
    DocumentComponent,
  ],
  providers: [

  ],
})
export class DocumentModule { }
