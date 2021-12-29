import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComerciosService } from 'src/app/services/comercios.service';

@Component({
  selector: 'app-lista-comercios',
  templateUrl: './lista-comercios.page.html',
  styleUrls: ['./lista-comercios.page.scss'],
})
export class ListaComerciosPage implements OnInit {

  @Input() nombre: string;

  listado: any = [];

  constructor(private modalCtrl: ModalController, private comService: ComerciosService) { }

  ngOnInit() {
    this.comService.getCommerceByCategory(this.nombre)
      .subscribe(respuesta => {
        this.listado = respuesta;
      });
  }

  salirModal() {
    this.modalCtrl.dismiss();
  }

}
