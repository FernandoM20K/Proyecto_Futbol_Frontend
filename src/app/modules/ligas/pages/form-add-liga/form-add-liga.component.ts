import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LigasService } from 'src/app/services/ligas/ligas.service';

@Component({
  selector: 'app-form-add-liga',
  templateUrl: './form-add-liga.component.html',
  styleUrls: ['./form-add-liga.component.scss']
})
export class FormAddLigaComponent implements OnInit {

  ligaForm: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder, private ligaService:LigasService, private router:Router) { }

  ngOnInit(): void {

    this.ligaForm = this.formBuilder.group({
      paisCompeticion: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      fechaCreacion: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      totalEquipos: ['', [Validators.required]],
      desensos: ['', [Validators.required]],
      asensos: ['', [Validators.required]],
      totalJornadas: ['', [Validators.required]],
      totalGanadores: ['', [Validators.required]],
      logoCompeticion: ['', [Validators.required]],
    })

  }

  get paisCompeticion() { 
    return this.ligaForm.get('paisCompeticion') 
  };

  get nombre() {
    return this.ligaForm.get('nombre')
  };

  get fechaCreacion() {
    return this.ligaForm.get('fechaCreacion')
  };

  get descripcion() {
    return this.ligaForm.get('descripcion')
  };

  get totalEquipos() {
    return this.ligaForm.get('totalEquipos')
  };

  get desensos() {
    return this.ligaForm.get('desensos')
  };

  get asensos() {
    return this.ligaForm.get('asensos')
  };

  get totalJornadas() {
    return this.ligaForm.get('totalJornadas')
  };

  get totalGanadores() {
    return this.ligaForm.get('totalGanadores')
  };

  get logoCompeticion() {
    return this.ligaForm.get('logoCompeticion')
  };

  addLiga() {
    this.ligaService.addLiga(this.ligaForm.value).subscribe(
      {
        next: (data:any) => {
          console.log('🟢🟢🟢Peticion realizada con exito',data);
          this.router.navigate(['/ligas']);
        },
        error: (error) => {
          console.error('🔴🔴🔴Error en la peticion',error);
        },
        complete: () => {
          console.info('✨✨✨Peticion completada');
        }
      }
    )    
  };

}
