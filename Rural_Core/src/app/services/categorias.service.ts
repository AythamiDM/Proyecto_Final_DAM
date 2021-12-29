import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private endPoint = 'http://localhost:8080/api/categorias';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get(this.endPoint);
  }

}