import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComerciosPage } from './lista-comercios.page';

const routes: Routes = [
  {
    path: '',
    component: ListaComerciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaComerciosPageRoutingModule {}
