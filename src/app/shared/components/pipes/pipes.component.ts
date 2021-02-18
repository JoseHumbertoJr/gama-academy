import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  filmes = {
    titulo: 'Xaquironiu',
    estrelas: 4.232312,
    precoAluguel: 15.53,
    dataLancamento: new Date(2018,12,1),
  }

}
