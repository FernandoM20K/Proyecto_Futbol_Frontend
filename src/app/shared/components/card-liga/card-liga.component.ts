import { Component, Input, OnInit } from '@angular/core';
import { ILigaInterface } from 'src/app/core/models/ILiga.interface';

@Component({
  selector: 'app-card-liga',
  templateUrl: './card-liga.component.html',
  styleUrls: ['./card-liga.component.scss']
})
export class CardLigaComponent implements OnInit {

  @Input()  ligas: ILigaInterface[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
