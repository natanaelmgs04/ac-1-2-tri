import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  temperatura1: number = 0;
  temperatura2: number = 0;
  temperatura3: number = 0;
  temperatura4: number = 0;

  constructor(public router: Router) {}

  abrirTela() {
    this.router.navigate(['/tela-sugestao'], {
      queryParams: {
        temperatura1: this.temperatura1,
        temperatura2: this.temperatura2,
        temperatura3: this.temperatura3,
        temperatura4: this.temperatura4
      }
    });
  }

}