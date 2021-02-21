import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';
import { DetalhesContatosComponent } from './contatos/detalhes-contatos/detalhes-contatos.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContadorComponent } from './shared/components/contador/contador.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
  path: 'home', component: HomeComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'extrato', component: ExtratoComponent,
  },
  {
    path: 'contador', component: ContadorComponent,
  },
  {
    path: 'contatos', component: ContatosComponent,
  },
  {
    path: 'contatos/:id', component: DetalhesContatosComponent,
  },
  /*/{
    path: '**', component: NaoEncontradoComponent,
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
