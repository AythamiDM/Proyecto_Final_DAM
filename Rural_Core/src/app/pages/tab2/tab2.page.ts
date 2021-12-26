import { Component, OnInit } from '@angular/core';
import { ComerciosService } from 'src/app/services/comercios.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  comercios: any = [];

  constructor(private comService: ComerciosService) { }

  ngOnInit(): void {
    this.getAllCommerce();
  }

  getAllCommerce() {
    this.comService.getComercios()
      .subscribe(respuesta => {
        this.comercios = respuesta;
      });
  }

}