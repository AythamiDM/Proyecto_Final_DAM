import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comercios } from '../interfaces/interfaces';

const api = environment.api;
const endPoint = environment.comercios;

@Injectable({
  providedIn: 'root'
})

export class ComerciosService {

  constructor(private http: HttpClient) { }


  /**
   * Método genérico que utilizaremos para ejecutar
   * las query de tipo GET
   * 
   * @param peticion 
   * @returns 
   */
  private executeQuery<T>(peticion: string) {
    const query = api + endPoint + peticion;
    return this.http.get<T>(query);
  }


  /**
   * Método con el cual obtenemos de nuestra API
   * todos los comercios que tiene almacenados
   * 
   * @returns 
   */
  getComercios() {
    const query = api + endPoint;
    return this.http.get<Comercios[]>(query).toPromise();
  }

  /**
   * Método con el que obtenemos de nuestra API los comercios
   * que pertenecen a una categoría determinada la cual recibimos
   * por parámetro
   * 
   * @param categoria 
   * @returns 
   */
  getCommerceByCategory(categoria: string) {
    const query = '?categoria=' + categoria;
    return this.executeQuery<Comercios[]>(query);
  }


  /**
   * Método que se encarga de hacer un POST en la API para
   * añadir nuevos comercios
   * 
   * @param comercio 
   * @returns 
   */
  addCommerce(comercio: Comercios) {
    const query = api + endPoint;
    //Transformamos el objeto de tipo comercio a formato JSON
    const json = JSON.stringify(comercio);
    //Creamos un header con el tipo de contenido, podemos mirarlo en postman
    const header = new HttpHeaders().set('Content-type', 'application/json');
    console.log('Comercio en formato JSON', json);
    //Ejecutamos el post en nuestra API pasandole la query, el comercio en formato json y en
    //las opciones le enviamos el header y el tipo de respuesta esperada
    return this.http.post<Comercios>(query, json, { headers: header, responseType: 'json' });
  }
}