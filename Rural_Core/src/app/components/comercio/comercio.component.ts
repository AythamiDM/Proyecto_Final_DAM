import { Component, Input, OnInit } from '@angular/core';
import { Comercios } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.scss'],
})
export class ComercioComponent implements OnInit {

  @Input() comercio: Comercios[] = [];
  // @Input() index: number;

  constructor() { }

  ngOnInit() { }

  openMenu() {
    console.log('Se abre el menu');
  }

}
