import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class LigasService {

  constructor(private http:HttpClient) { }

  public getLigas() {
    return this.http.get(`${baseUrl}/ligas/`);
  }

  public addLiga(liga:any) {
    return this.http.post(`${baseUrl}/ligas/`, liga);
  }
  
}
