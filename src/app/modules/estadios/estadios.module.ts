import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadiosRoutingModule } from './estadios-routing.module';
import { FormAddEstadioComponent } from './pages/form-add-estadio/form-add-estadio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewEstadiosComponent } from './pages/view-estadios/view-estadios.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormAddEstadioComponent,
    ViewEstadiosComponent
  ],
  imports: [
    CommonModule,
    EstadiosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class EstadiosModule { }
