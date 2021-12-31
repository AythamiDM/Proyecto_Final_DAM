import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comercios } from '../interfaces/interfaces';

const api = environment.api;
const endPoint = environment.comercios;

@Injectable({
  providedIn: 'root'
})

export class ComerciosService {

  constructor(private http: HttpClient) { }


  private executeQuery<T>(peticion: string) {
    const query = api + endPoint + peticion;
    return this.http.get<T>(query);
  }


  getComercios() {
    const query = api + endPoint;
    return this.http.get<Comercios[]>(query);
  }


  getCommerceByCategory(categoria: string) {
    const query = '?categoria=' + categoria;
    return this.executeQuery<Comercios[]>(query);
  }


  // getCommerceByCategory(categoria: string): Observable<Comercios[]> {
  //   const query = '?categoria=' + categoria;
  //   return this.executeQuery<Comercios[]>(query);
  // }
}