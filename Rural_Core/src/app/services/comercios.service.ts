import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComerciosService {

  private endPoint = 'http://localhost:8080/api/comercios'

  constructor(private http: HttpClient) { }

  getComercios() {
    return this.http.get(this.endPoint);
  }
}
