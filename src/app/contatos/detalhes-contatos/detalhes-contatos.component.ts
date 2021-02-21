import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contato } from './../contatos.interface';
import { ContatosService } from './../contatos.service';

@Component({
  selector: 'app-detalhes-contatos',
  templateUrl: './detalhes-contatos.component.html',
  styleUrls: ['./detalhes-contatos.component.css']
})
export class DetalhesContatosComponent implements OnInit {

  contato: Contato;
  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contatoService: ContatosService
  ) { }

  ngOnInit() {
    const idContato = this.route.snapshot.paramMap.get('id');
    this.carregarContato(idContato);
  }

  carregarContato(id: string){
    this.estaCarregando = true;
    this.erroNoCarregamento = false;
    this.contatoService.getContato(id).pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    ).subscribe(
      response => this.onSuccess(response),
      error => this.onError(error)
    );
  }

  onSuccess(response: Contato){
    this.contato = response;
  }

  onError(error: any){
    this.erroNoCarregamento = true;
  }
  voltar(){
    this.router.navigate([`/contatos`]);
  }
}
