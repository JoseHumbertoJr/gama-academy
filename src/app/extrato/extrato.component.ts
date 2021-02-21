import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Transacao } from './extrato.interface';
import { ExtratoService } from './extrato.service';

    @Component({
      selector: 'app-extrato',
      templateUrl: './extrato.component.html',
      styleUrls: ['./extrato.component.css']
    })
    export class ExtratoComponent implements OnInit {

      transacoes: Transacao[];
      pagina = 1;

      estarCarregando: boolean;
      erroNoCarregamento: boolean;

      constructor(private extratoService: ExtratoService){

      }

      ngOnInit(): void {
        this.carregarExtrato();
      };

      carregarExtrato(){
        this.estarCarregando = true;

        this.extratoService.getTransacoes(this.pagina)
        .pipe(
          take(1),
          finalize(() => this.estarCarregando = false)
        )
        .subscribe(
          response => this.onSucesso(response),
          error => this.onError(error),
        );
      }

        onSucesso(response: Transacao[]){
          this.transacoes = response;
        }
        onError(error){
          this.erroNoCarregamento = true;
        }
        paginaAnterior(){
          this.pagina = this.pagina -1;
          this.carregarExtrato();
        }

        proximaPagina(){
          this.pagina = this.pagina + 1;
          this.carregarExtrato();
        }

      }
