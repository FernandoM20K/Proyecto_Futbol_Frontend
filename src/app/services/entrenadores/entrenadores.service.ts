import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntrenadoresService {

  constructor(private http:HttpClient) { }

  public getEntrenadores() {
    return this.http.get('http://localhost:8080/entrenadores');
  }
}
