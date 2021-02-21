import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contato } from './contatos.interface';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  contatos: Contato[];

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(private contatoService: ContatosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos(){
    this.estaCarregando = true;
    this.erroNoCarregamento = false;
    this.contatoService.getContatos().pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    ).subscribe(
      response => this.OnSucess(response),
      error => this.OnError(error)
    );
  }

  OnSucess(reponse: Contato[]){
    this.contatos = reponse;
  }

  OnError(error: any){
    this.erroNoCarregamento = true;
  }

  goDetalhes(idContato: string){
    this.router.navigate([`/contatos/${idContato}`]);
  }
}
