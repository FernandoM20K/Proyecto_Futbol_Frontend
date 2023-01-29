import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LigasRoutingModule } from './ligas-routing.module';
import { ViewLigasComponent } from './pages/view-ligas/view-ligas.component';
import { FormAddLigaComponent } from './pages/form-add-liga/form-add-liga.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ViewLigasComponent,
    FormAddLigaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LigasRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LigasModule { }
