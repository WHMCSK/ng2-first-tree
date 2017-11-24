import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { routes } from './document.routes';

import { DocumentComponent } from './document.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    DocumentComponent,
  ],
  providers: [

  ],
})
export class DocumentModule { }
