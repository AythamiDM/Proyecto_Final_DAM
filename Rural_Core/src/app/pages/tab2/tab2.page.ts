import { Component, OnInit, ViewChild } from '@angular/core';
import { ComerciosService } from 'src/app/services/comercios.service';
// import { IonInfiniteScroll } from '@ionic/angular';
import { Comercios } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  // @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  comercios: Comercios[] = [];

  constructor(private comService: ComerciosService) { }


  ngOnInit(): void {
    this.getAllCommerce();
  }


  private getAllCommerce() {
    this.comService.getComercios()
      .subscribe(respuesta => {
        this.comercios = respuesta;
      });
  }


  loadData(event: any) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.comercios.length === 10) {
        event.target.disabled = true;
      }
    }, 500);
  }

  // toggleInfiniteScroll() {
  //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  // }

}