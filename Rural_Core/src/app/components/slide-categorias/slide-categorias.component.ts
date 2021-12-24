import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-categorias',
  templateUrl: './slide-categorias.component.html',
  styleUrls: ['./slide-categorias.component.scss'],
})
export class SlideCategoriasComponent implements OnInit {

  slideOpts = {
    slidesPerView: 2.1,
    freeMode: true,
    spaceBetween: -15
  };

  categorias: string[] = ['Ocio', 'Alimentación', 'Restauración', 'Informática', 'Farmacia'];

  constructor() { }

  ngOnInit() { }

}
