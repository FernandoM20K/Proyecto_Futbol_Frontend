import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { IEstadioInterface } from 'src/app/core/models/IEstadio.interface';

@Component({
  selector: 'app-card-estadio',
  templateUrl: './card-estadio.component.html',
  styleUrls: ['./card-estadio.component.scss']
})
export class CardEstadioComponent implements OnInit, AfterViewInit {

  @ViewChild('imgEstadio') myImgEstadio!:ElementRef;

  @Input() listEstadios: IEstadioInterface[] = [];

  constructor(private renderer2:Renderer2) { }

  ngAfterViewInit(): void {
    if(this.listEstadios && this.listEstadios.length > 0) {
      this.agregarFondoEstadio();  
    }
  }

  ngOnInit(): void {

  }

  agregarFondoEstadio() {
    const imgEstadio = this.myImgEstadio.nativeElement;
    this.renderer2.setStyle(imgEstadio,'background-image',`url(${this.listEstadios[0].imagen})`);
    this.renderer2.addClass(imgEstadio,'img-estadio')
  }

}
