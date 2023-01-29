import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClubInterface } from 'src/app/core/models/IClub.interface';
import { ClubesService } from 'src/app/services/clubes/clubes.service';

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.scss']
})
export class ClubPageComponent implements OnInit, AfterViewInit {

  @ViewChild('imgEstadio') myImgEstadio!:ElementRef;

  clubIdRequerido:number = 0;
  clubObtenido:IClubInterface = {} as IClubInterface ;

  constructor(private route:ActivatedRoute, private clubService:ClubesService, private renderer2:Renderer2) { }

  ngAfterViewInit(): void {
    this.agregarFondoEstadio();
  }

  ngOnInit(): void {
    this.obtenerClubPorId(this.clubIdRequerido);
    // CM: Desestruturar para que se vea mejor y aplicarlo en el html
  }

  agregarFondoEstadio() {
    const imgEstadio = this.myImgEstadio.nativeElement;
    this.renderer2.setStyle(imgEstadio,'background-image',`url(${this.clubObtenido.estadio.imagen})`);
    this.renderer2.addClass(imgEstadio,'img-estadio')
  }

  obtenerClubPorId(clubId:number) {
    clubId = this.route.snapshot.params['clubId'];
    this.clubService.getClubXId(clubId).subscribe(
      {
        next: (data:any) => {
          console.log('🟢🟢🟢Datos Obtenidos: ',data);
          this.clubObtenido = data;
        },
        error: (error:any) => {
          console.error('🔴🔴🔴Ha ocurrido un error',error);
        },
        complete: () => {
          console.info('✨✨✨Peticion Completada con exito')
        }
      }
    )
  }

}
