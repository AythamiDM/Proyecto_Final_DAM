import { Component, Input, OnInit } from '@angular/core';
import { Comercios } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-lista-comercios',
  templateUrl: './lista-comercios.component.html',
  styleUrls: ['./lista-comercios.component.scss'],
})
export class ListaComerciosComponent implements OnInit {

  @Input() comercios: Comercios[] = [];

  constructor() { }

  ngOnInit() { }

}
