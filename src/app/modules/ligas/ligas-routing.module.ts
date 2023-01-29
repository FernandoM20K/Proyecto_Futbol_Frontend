import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddLigaComponent } from './pages/form-add-liga/form-add-liga.component';
import { ViewLigasComponent } from './pages/view-ligas/view-ligas.component';

const routes: Routes = [
  {
    path: '',
    component: ViewLigasComponent,
  },
  {
    path: 'add-liga',
    component: FormAddLigaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LigasRoutingModule { }
