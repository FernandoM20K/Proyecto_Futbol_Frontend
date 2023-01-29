import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { IClubInterface, Results } from 'src/app/core/models/IClub.interface';

@Component({
  selector: 'app-card-club',
  templateUrl: './card-club.component.html',
  styleUrls: ['./card-club.component.scss']
})
export class CardClubComponent implements OnInit {

  @Input() listClubes: IClubInterface[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
