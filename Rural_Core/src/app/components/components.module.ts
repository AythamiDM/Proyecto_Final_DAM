import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { SlideCategoriasComponent } from './slide-categorias/slide-categorias.component';



@NgModule({
  declarations: [
    MenuComponent,
    SlideCategoriasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    SlideCategoriasComponent
  ]
})
export class ComponentsModule { }
