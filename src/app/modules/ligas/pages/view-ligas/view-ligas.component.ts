import { Component, OnInit } from '@angular/core';
import { ILigaInterface } from 'src/app/core/models/ILiga.interface';
import { LigasService } from 'src/app/services/ligas/ligas.service';

@Component({
  selector: 'app-view-ligas',
  templateUrl: './view-ligas.component.html',
  styleUrls: ['./view-ligas.component.scss']
})
export class ViewLigasComponent implements OnInit {

  listLigas: ILigaInterface [] = [];

  constructor(private ligaService:LigasService) { }

  ngOnInit(): void {

    this.getLigas();

  }

  getLigas(){
    this.ligaService.getLigas().subscribe(
      {
        next: (data:any) => {
          console.log('🟢🟢🟢Peticion realizada con exito',data);
          this.listLigas = data;
          console.log(this.listLigas.values);
        },
        error: (error:any) => {
          console.error('🔴🔴🔴Error en la Peticion',error);
        },
        complete: () => {
          console.info('✨✨✨Peticion Finalizada');
        }
      }
    );
  };

}
