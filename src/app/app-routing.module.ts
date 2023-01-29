import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'clubes',
    loadChildren: () => import('./modules/clubes/clubes.module').then(m => m.ClubesModule),
  },
  {
    path: 'estadios',
    loadChildren: () => import('./modules/estadios/estadios.module').then(m => m.EstadiosModule),
  },
  {
    path: 'ligas',
    loadChildren: () => import('./modules/ligas/ligas.module').then(m => m.LigasModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
