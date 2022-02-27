import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Categorias, Comercios } from 'src/app/interfaces/interfaces';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ComerciosService } from 'src/app/services/comercios.service';

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

  constructor(private catService: CategoriasService,
    private comService: ComerciosService,
    private alertCtrl: AlertController
  ) { }

  /**
   * Al iniciar la página  cargaremos todas las categorias en
   * el array que hemos declarado y lo mostraremos en el
   * ion-select
   */
  ngOnInit() {
    this.catService.getCategorias()
      .subscribe(respuesta => {
        this.categorias = respuesta;
      })
  }

  /**
   * Método asociado al botón aceptar con el que 
   * 
   * @param formulario 
   */
  onSubmitTemplate(formulario: NgForm) {
    console.log('Form submit', formulario);
    this.comService.addCommerce(this.comercio).subscribe(respuesta => {
      console.log('Respuesta de la api al añadir comercio', respuesta);
    });
    formulario.resetForm();
    this.presentAlertConfirm();
  }

  /**
   * Metodo que se encarga de resetear el formulario
   * de registro de comercios al pulsar el botón cancelar
   * 
   * @param formulario 
   */
  resetForm(formulario: NgForm) {
    formulario.resetForm();
  }


  /**
   * Creamos un método para que nos muestre un mensaje de aler
   * confirmando que se ha registrado correctamente
   */
  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      cssClass: 'verdeOscuro',
      header: 'Envio de formulario',
      message: '<strong>Se ha registrado correctamente</strong>',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }

}
