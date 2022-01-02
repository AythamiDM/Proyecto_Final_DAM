import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { SlideCategoriasComponent } from './slide-categorias/slide-categorias.component';
import { ComercioComponent } from './comercio/comercio.component';
import { ListaComerciosComponent } from './lista-comercios/lista-comercios.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    MenuComponent,
    SlideCategoriasComponent,
    ComercioComponent,
    ListaComerciosComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    SlideCategoriasComponent,
    ComercioComponent,
    ListaComerciosComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
