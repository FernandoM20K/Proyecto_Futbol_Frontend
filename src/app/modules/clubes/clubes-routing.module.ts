import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddClubComponent } from './pages/form-add-club/form-add-club.component';

const routes: Routes = [
  {
    path: 'add-club',
    component: FormAddClubComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubesRoutingModule { }
