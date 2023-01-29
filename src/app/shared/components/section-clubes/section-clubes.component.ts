import { Component, OnInit } from '@angular/core';
import { IClubInterface, Results } from 'src/app/core/models/IClub.interface';
import { ClubesService } from 'src/app/services/clubes/clubes.service';

@Component({
  selector: 'app-section-clubes',
  templateUrl: './section-clubes.component.html',
  styleUrls: ['./section-clubes.component.scss']
})
export class SectionClubesComponent implements OnInit {

  listClubes: IClubInterface[] = [];

  constructor(private clubesService:ClubesService) { }

  ngOnInit(): void {
    this.obtenerClubes();
  }

  obtenerClubes() {
    this.clubesService.getClubes().subscribe(
      {
        next: (data:any) => {
          console.log(data);
          this.listClubes = data;
        },
        error: (error:any) => {
          console.error(`Error en la peticion de lista de clubes`, error);
        },
        complete: () => {
          console.info('Peticion de lista de clubes completada');
        }
      }
    )
  }

}
