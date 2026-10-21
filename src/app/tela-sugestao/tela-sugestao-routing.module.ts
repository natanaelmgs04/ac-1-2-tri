import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaSugestaoPage } from './tela-sugestao.page';

const routes: Routes = [
  {
    path: '',
    component: TelaSugestaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaSugestaoPageRoutingModule {}
