import { Component, OnInit } from '@angular/core';
import { IEstadioInterface } from 'src/app/core/models/IEstadio.interface';
import { EstadiosService } from 'src/app/services/estadios/estadios.service';

@Component({
  selector: 'app-view-estadios',
  templateUrl: './view-estadios.component.html',
  styleUrls: ['./view-estadios.component.scss']
})
export class ViewEstadiosComponent implements OnInit {

  listEstadios: IEstadioInterface[] = [];

  constructor(private estadioService:EstadiosService) { }

  ngOnInit(): void {

    this.getEstadios();

  }

  getEstadios() {
    this.estadioService.getEstadios().subscribe(
      {
        next: (data:any) => {
          console.log('🟢🟢🟢Peticion realizada Correctamente: ',data);
          this.listEstadios = data;
        },
        error: (error:any) => {
          console.error(`🔴🔴🔴Error en la peticion de lista de estadios`, error);
        },
        complete: () => {
          console.info('✨✨✨Peticion de lista de estadios completada');
        }
      }
    )
  }

}
