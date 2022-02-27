import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import L from 'leaflet';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  position: any;
  map: L.Map;
  center: L.PointTuple;
  marcador: L.icon = L.icon({ iconUrl: 'assets/icon/icons8-mapa-de-pin-40.png', iconSize: [48, 48], iconAnchor: [24, 43] });

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  /**
   * Método que se encarga de iniciar y mostrar el mapa con un
   * marcador de nuestra ubicación usando Geolocation
   */
  async initMap() {
    //obtenemos la posición actual del dispositivo y la imprimimos en consola
    this.position = await Geolocation.getCurrentPosition();
    console.log('position=', this.position);

    //establecemos el centro del mapa en nuestra posición, extrayendo nuestras coordenadas
    this.center = [this.position.coords.latitude, this.position.coords.longitude];

    //Cargamos el mapa con los datos que hemos calculado (el centro) y le damos un zoom  de 13
    setTimeout(() => {
      this.map = L.map('map').setView(this.center, 13);
      //Añadimos al mapa las fuentes del mapa y del icono por si hubiera problemas de derechos
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <a target="_blank" href="https://iconos8.es/icon/30567/mapa-de-pin">Mapa de Pin</a> icono de <a target="_blank" href="https://iconos8.es">Icons8</a> contributors'

      }).addTo(this.map);
      //Añadimos al mapa un marcador, también en el centro, con un icono que hemos descargado
      //y además le hemos puesto un popup con texto
      L.marker(this.center, { icon: this.marcador }).addTo(this.map).bindPopup('Estás aquí').openPopup();
    });
  }

}
