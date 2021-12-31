import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categorias } from '../interfaces/interfaces';

const api = environment.api;
const endPoint = environment.categorias;

@Injectable({
  providedIn: 'root'
})

export class CategoriasService {

  constructor(private http: HttpClient) { }

  // private executeQuery<T>(peticion: string) {
  //   const query = api + endPoint + peticion;
  //   return this.http.get<T>(query);
  // }

  getCategorias() {
    const query = api + endPoint;
    return this.http.get<Categorias[]>(query);
  }

}