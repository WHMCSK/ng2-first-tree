import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Ng2FirstTreeModule } from '../ng2-first-tree';

import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

import { ScrollPositionDirective } from './theme/directives/scrollPosition.directive';

import { SimpleTreeService } from './local_data_services/simple.tree.service';

@NgModule({
  declarations: [
    AppComponent,
    ScrollPositionDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    Ng2FirstTreeModule,
    PagesModule,
  ],
  providers: [SimpleTreeService],
  bootstrap: [AppComponent],
})
export class AppModule { }
