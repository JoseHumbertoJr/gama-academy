import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesContatosComponent } from './contatos/detalhes-contatos/detalhes-contatos.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { LoginComponent } from './login/login.component';
import { ContadorComponent } from './shared/components/contador/contador.component';
import { EstaLogadoGuard } from './shared/guards/logado/esta-logado.guard';
import { NaoLogadoGuard } from './shared/guards/nao-logado/nao-logado.guard';



const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
  path: 'home', loadChildren: () => import('././home/home.module').then(m => m.HomeModule), canActivate: [EstaLogadoGuard],
  },
  {
    path: 'login', component: LoginComponent, canActivate: [NaoLogadoGuard],
  },
  {
    path: 'extrato', component: ExtratoComponent, canActivate: [EstaLogadoGuard],
  },
  {
    path: 'contador', component: ContadorComponent, canActivate: [EstaLogadoGuard],
  },
  {
    path: 'contatos', loadChildren: () => import('./contatos/contatos.module').then(m => m.ContatosModule), canActivate: [EstaLogadoGuard],
  },
  {
    path: 'contatos/:id', component: DetalhesContatosComponent, canActivate: [EstaLogadoGuard],
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
