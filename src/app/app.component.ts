import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router){

  }

  title = 'gama-academy';
  titulo = 'aprovado com pleno'


  onValorMudou(novoValor){
    console.log("mudou!!!", novoValor)
  }

}
