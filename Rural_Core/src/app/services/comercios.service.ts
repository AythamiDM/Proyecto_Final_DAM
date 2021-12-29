import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Comercios } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ComerciosService {

  private endPoint = 'http://localhost:8080/api/comercios';

  // private comercios: Comercios = {};

  constructor(private http: HttpClient) { }

  // private executeQuery<T>(endpoint: string) {
  //   return this.http.get<T>(`${this.endPoint}`);
  // }

  getComercios() {
    return this.http.get(this.endPoint);
  }

  getCommerceByCategory(categoria: string) {
    const query = this.endPoint + '?categoria=' + categoria;
    return this.http.get(query);
  }
}
