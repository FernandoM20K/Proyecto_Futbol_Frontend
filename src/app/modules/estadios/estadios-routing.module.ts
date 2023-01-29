import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddEstadioComponent } from './pages/form-add-estadio/form-add-estadio.component';
import { ViewEstadiosComponent } from './pages/view-estadios/view-estadios.component';

const routes: Routes = [
  {
    path: '',
    component: ViewEstadiosComponent,
  },
  {
    path: 'add-estadio',
    component: FormAddEstadioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadiosRoutingModule { }
