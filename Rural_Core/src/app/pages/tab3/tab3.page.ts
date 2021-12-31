import { Component, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { Categorias, Comercios } from 'src/app/interfaces/interfaces';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ComerciosService } from 'src/app/services/comercios.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {

  @ViewChild(IonAccordionGroup, { static: true }) accordionGroup: IonAccordionGroup;

  categorias: Categorias[] = [];
  comercios: Comercios[] = [];

  constructor(
    private catService: CategoriasService,
    private comService: ComerciosService
  ) { }


  ngOnInit(): void {
    this.AllCategories();
    this.accordionGroup.value = 'categorias';
  }


  private AllCategories() {
    this.catService.getCategorias()
      .subscribe(respuesta => {
        this.categorias = respuesta;
      })
  }


  private CommerceByCategory(categoria: string) {
    this.comService.getCommerceByCategory(categoria)
      .subscribe(respuesta => {
        this.comercios = respuesta;
        this.estadoAcordeon();
        console.log('Comercios: ', this.comercios);
      });
  }

  private estadoAcordeon() {
    if (this.comercios.length === 0) {
      this.accordionGroup.value = 'categorias';
    } else {
      this.accordionGroup.value = undefined;
    }
  }

}
