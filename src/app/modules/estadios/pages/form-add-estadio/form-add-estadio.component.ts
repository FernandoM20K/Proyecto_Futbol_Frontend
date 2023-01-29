import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IClubInterface } from 'src/app/core/models/IClub.interface';
import { IEstadioInterface } from 'src/app/core/models/IEstadio.interface';
import { EstadiosService } from 'src/app/services/estadios/estadios.service';

@Component({
  selector: 'app-form-add-estadio',
  templateUrl: './form-add-estadio.component.html',
  styleUrls: ['./form-add-estadio.component.scss']
})
export class FormAddEstadioComponent implements OnInit {

  estadio:IEstadioInterface = {} as IEstadioInterface;
  estadioForm: FormGroup = new FormGroup({});

  constructor(
    private estadioService: EstadiosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.estadioForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      capacidad: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      imagen: ['', [Validators.required]]
    })

  }

  get nombre() {
    return this.estadioForm.get('nombre');
  };

  get ciudad() {
    return this.estadioForm.get('ciudad');
  };

  get capacidad() {
    return this.estadioForm.get('capacidad');
  };

  get precio() {
    return this.estadioForm.get('precio');
  };

  get imagen() {
    return this.estadioForm.get('imagen');
  };

  addEstadio() {
    this.estadioService.addEstadio(this.estadioForm.value).subscribe(
      {
        next: (data:any) => {
          console.log(data);
          this.router.navigate(['/estadios']);
        },
        error: (error:any) => {
          console.log(error);
        },
        complete: () => {
          console.log('Estadio creado');
        }
      }
    );
  }

}
