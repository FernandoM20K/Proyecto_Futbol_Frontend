import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubesRoutingModule } from './clubes-routing.module';
import { FormAddClubComponent } from './pages/form-add-club/form-add-club.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormAddClubComponent
  ],
  imports: [
    CommonModule,
    ClubesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ClubesModule { }
