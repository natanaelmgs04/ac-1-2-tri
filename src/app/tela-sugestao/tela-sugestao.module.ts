import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaSugestaoPageRoutingModule } from './tela-sugestao-routing.module';

import { TelaSugestaoPage } from './tela-sugestao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaSugestaoPageRoutingModule
  ],
})
export class TelaSugestaoPageModule {}
