import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComerciosService } from 'src/app/services/comercios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    email: null,
    password: null
  };

  constructor(private comService: ComerciosService) { }

  ngOnInit() { }

  onSubmitTemplate(formulario: NgForm) {
    console.log('Form submit');
    console.log(this.usuario);
    console.log(formulario);
  }

}
