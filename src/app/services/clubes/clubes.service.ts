import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, retry } from 'rxjs';
import { IClubInterface, Results } from 'src/app/core/models/IClub.interface';
import { LISTA_CLUBES } from 'src/app/mocks/clubes.mock';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ClubesService {

  listaClubes: IClubInterface[] = LISTA_CLUBES;

  constructor(private http:HttpClient) { }

  public getClubes() {
    return this.http.get(`${baseUrl}/club/`);
  }

  public getClubXId(id:number) {
    return this.http.get(`${baseUrl}/club/${id}`);
  }

  public addClub(club:IClubInterface) {
    return this.http.post(`${baseUrl}/club/`,club);
  }
}
