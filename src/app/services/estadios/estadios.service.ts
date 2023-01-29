import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class EstadiosService {

  constructor(private http:HttpClient) { }

  public getEstadios() {
    return this.http.get(`${baseUrl}/estadios/`);
  };

  public getEstadioXId(id:number) {
    return this.http.get(`${baseUrl}/estadios/${id}`);
  };

  public addEstadio(estadio:any) {
    return this.http.post(`${baseUrl}/estadios/`, estadio);
  };

  public updateEstadio(estadio:any) {
    return this.http.put(`${baseUrl}/estadios/`, estadio);
  }
}
