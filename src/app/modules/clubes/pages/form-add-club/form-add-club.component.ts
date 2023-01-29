import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IClubInterface } from 'src/app/core/models/IClub.interface';
import { IEntranadorInterface } from 'src/app/core/models/IEntranador.interface';
import { IEstadioInterface } from 'src/app/core/models/IEstadio.interface';
import { ClubesService } from 'src/app/services/clubes/clubes.service';
import { EntrenadoresService } from 'src/app/services/entrenadores/entrenadores.service';
import { EstadiosService } from 'src/app/services/estadios/estadios.service';
import { LigasService } from 'src/app/services/ligas/ligas.service';

@Component({
  selector: 'app-form-add-club',
  templateUrl: './form-add-club.component.html',
  styleUrls: ['./form-add-club.component.scss'],
})
export class FormAddClubComponent implements OnInit {
  club: IClubInterface = {} as IClubInterface;
  clubForm: FormGroup = new FormGroup({});
  listaEstadios: IEstadioInterface[] = [];
  listaEntrenadores: IEntranadorInterface[] = [];
  listaLigas: IEstadioInterface[] = [];

  constructor(
    private clubService: ClubesService,
    private entrenadorService: EntrenadoresService,
    private estadioService: EstadiosService,
    private ligaService: LigasService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.clubForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      historia: [
        '',
        [
          Validators.required,
          Validators.minLength(100),
          Validators.maxLength(120),
        ],
      ],
      fundador: ['', [Validators.required]],
      propietario: ['', [Validators.required]],
      fechaFundacion: ['', [Validators.required]],
      estadio: {
        estadioId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      },
      entrenador: {
        entrenadorId: [
          '',
          [Validators.required, Validators.pattern('^[0-9]*$')],
        ],
      },
      liga: {
        ligaId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      },
      imgEscudo: ['', [Validators.required]],
    });

    this.getEntrenadores();
    this.getEstadios();
    this.getLigas();
  }

  get nombre() {
    return this.clubForm.get('nombre');
  }

  get historia() {
    return this.clubForm.get('historia');
  }

  get fundador() {
    return this.clubForm.get('fundador');
  }

  get propietario() {
    return this.clubForm.get('propietario');
  }

  get fechaFundacion() {
    return this.clubForm.get('fechaFundacion');
  }

  get estadioId() {
    return this.clubForm.get('estadio.estadioId');
  }

  get entrenadorId() {
    return this.clubForm.get('entrenador.entrenadorId');
  }

  get ligaId() {
    return this.clubForm.get('liga.ligaId');
  }

  get imgEscudo() {
    return this.clubForm.get('imgEscudo');
  }

  // CM: Metodo para añadir un club
  addClub() {
    this.clubService.addClub(this.club).subscribe({
      next: (data) => {
        console.log(
          '🟢🟢🟢Peticion Realizada con exito, Club Añadido correctamente',
          data
        );
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error(
          '🔴🔴🔴Ha ocurrido un error en la peticion, Club no se añadio correctamente',
          error
        );
      },
      complete: () => {
        console.info('✨✨✨Peticion Completada');
      },
    });
  };

  // CM: Metodo para obtener la lista de entrenadores
  getEntrenadores() {
    this.entrenadorService.getEntrenadores().subscribe({
      next: (data:any) => {
        console.log('🟢🟢🟢Peticion Realizada con exito, Lista de entrenadores:',data);
        this.listaEntrenadores = data;
      },
      error: (error) => {
        console.error('🔴🔴🔴Ha ocurrido un error en la peticion de la lista de entrenadores',error);
      },
      complete: () => {
        console.info('✨✨✨Peticion Completada');
      },
    });
  };

  // CM: Metodo para obtener la lista de estadios
  getEstadios() {
    this.estadioService.getEstadios().subscribe({
      next: (data:any) => {
        console.log('🟢🟢🟢Peticion Realizada con exito, Lista de estadios:',data);
        this.listaEstadios = data;
      },
      error: (error) => {
        console.error('🔴🔴🔴Ha ocurrido un error en la peticion de la lista de estadios',error);
      },
      complete: () => {
        console.info('✨✨✨Peticion Completada');
      },
    });
  };

  // CM: Metodo para obtener la lista de ligas
  getLigas() {
    this.ligaService.getLigas().subscribe({
      next: (data:any) => {
        console.log('🟢🟢🟢Peticion Realizada con exito, Lista de ligas:', data);
        this.listaLigas = data;
      },
      error: (error) => {
        console.error('🔴🔴🔴Ha ocurrido un error en la peticion de la lista de ligas',error);
      },
      complete: () => {
        console.info('✨✨✨Peticion Completada');
      },
    });
  };

}
