import { Component, OnInit, ViewChild } from '@angular/core';
import { ComerciosService } from 'src/app/services/comercios.service';
import { Comercios } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  comercios: Comercios[] = [];

  constructor(private comService: ComerciosService) { }


  ngOnInit(): void {
    this.getAllCommerce();
  }

  //El ionViewWillEnter() se dispara cada vez que entremos en la pagina
  //de ésta forma si hay cambios en la BBDD se mostrarán
  async ionViewWillEnter() {
    this.getAllCommerce();
  }

  /**
   * Obtenemos todos los comercios mediante nuestro servicio
   * y los mostramos en la vista
   */
  private async getAllCommerce() {
    this.comercios = await this.comService.getComercios();
  }

}