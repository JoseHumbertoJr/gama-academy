import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesContatosComponent } from './detalhes-contatos/detalhes-contatos.component';
import { ContatosComponent } from './lista-contatos/contatos.component';


const routes: Routes = [{
  path: '', component: ContatosComponent,
},
{
  path: ':id', component: DetalhesContatosComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
