import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ListaComerciosPage } from '../lista-comercios/lista-comercios.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  categorias: any = [];

  constructor(private catService: CategoriasService, private modalCtrl: ModalController) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.catService.getCategorias()
      .subscribe(respuesta => {
        this.categorias = respuesta;
      })
  }

  async findByCategory(categoria: string) {
    console.log('categoria:', categoria);
    const modal = await this.modalCtrl.create(
      {
        component: ListaComerciosPage,
        componentProps:
        {
          nombre: categoria
        }
      });

    await modal.present();

  }

}
