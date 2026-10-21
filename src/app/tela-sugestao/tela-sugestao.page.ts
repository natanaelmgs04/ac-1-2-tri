import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-sugestao',
  templateUrl: './tela-sugestao.page.html',
  styleUrls: ['./tela-sugestao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class TelaSugestaoPage implements OnInit {

  temperatura1: number = 0;
  temperatura2: number = 0;
  temperatura3: number = 0;
  temperatura4: number = 0;

  sugestao: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params) => {

      this.temperatura1 = Number(params['temperatura1']);
      this.temperatura2 = Number(params['temperatura2']);
      this.temperatura3 = Number(params['temperatura3']);
      this.temperatura4 = Number(params['temperatura4']);

      this.calcularSugestao();

    });

  }

  calcularMedia() {
    return (this.temperatura1 + this.temperatura2 + this.temperatura3 + this.temperatura4) / 4;
  }
  
  calcularSugestao() {
    const media = this.calcularMedia();
    if (media <= 3) {
      this.sugestao = 'Sugiramos plantar batata, trigo, cevada, aveia, centeio, alho, cebola, espinafre, beterraba, ervilha.';
    }else if (media > 3 && media <= 6) {
      this.sugestao = 'Sugerimos plantar maçã, pera, ameixa, cereja, kiwi, alface, couve, brócolis, cenoura, nabo.';
    } else if (media > 6 && media <= 9) {
      this.sugestao = 'Sugerimos plantar uva, morango, pêssego, couve-flor, repolho, rúcula, salsa, lentilha, grão-de-bico, ervilha.';
    } else if (media > 9 && media <= 12) {
      this.sugestao = 'Sugerimos plantar batata-doce, mandioca, abobrinha, pepino, cebola, alho-poró, aveia, feijão-fava, girassol, linhaça.';
    } else if (media > 12 && media <= 15) {
      this.sugestao = 'Sugerimos plantar milho, feijão, tomate, pimentão, berinjela, melancia, melão, abóbora, amendoim, tabaco.';
    } else if (media > 15 && media <= 18 ) {
      this.sugestao = 'Sugerimos plantar soja, arroz, sorgo, canola, café arábica, banana, mamão, quiabo, algodão, ervas aromáticas.';
    } else if (media > 18 && media <= 21) {
      this.sugestao = 'Sugerimos plantar cana-de-açúcar, café robusta, laranja, limão, tangerina, manga, maracujá, mandioca, coco, sisal.';
    } else if (media > 21 && media <= 24) {
      this.sugestao = 'Sugerimos plantar cacau, dendê, abacaxi, acerola, goiaba, caju, inhame, cará, pimenta-do-reino, gengibre.';  
    } else if (media > 24 && media <= 27) {
      this.sugestao = 'Sugerimos plantar borracha, café robusta, banana-da-terra, coco, mamona, cúrcuma, mandioca, arroz tropical, juta, baunilha.';  
    } else {
      this.sugestao = 'Sugerimos plantar cana-de-açúcar, algodão, cacau, dendê, banana, coco, manga, mamão, pimenta-malagueta, mandioca.';
    }
  }
    }
