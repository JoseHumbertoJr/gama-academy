import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContatosRoutingModule } from './contatos-routing.module';
import { DetalhesContatosComponent } from './detalhes-contatos/detalhes-contatos.component';
import { ContatosComponent } from './lista-contatos/contatos.component';


@NgModule({
  declarations: [
    ContatosComponent,
    DetalhesContatosComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule
  ]
})
export class ContatosModule { }
