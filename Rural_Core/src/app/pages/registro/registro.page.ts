import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categorias, Comercios } from 'src/app/interfaces/interfaces';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

  //array de objetos de tipo categorias
  categorias: Categorias[] = [];

  //Objeto de tipo comercios
  comercio: Comercios = {
    nombre: '',
    direccion: '',
    telefono: null,
    email: '',
    password: '',
    cif: '',
    categoria: '',
    descripcion: ''
  };

  constructor(private catService: CategoriasService) { }

  ngOnInit() {
    this.catService.getCategorias()
      .subscribe(respuesta => {
        this.categorias = respuesta;
      })
  }

  onSubmitTemplate(formulario: NgForm) {
    console.log(formulario);
    console.log(this.comercio);
  }

}
