import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },{
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },{
    path: 'document',
    loadChildren: './document/document.module#DocumentModule',
  },
];
