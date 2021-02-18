import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { ContadorComponent } from './shared/components/contador/contador.component';

const routes: Routes = [
  {
  path: 'home', component: HomeComponent,
  },
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'extrato', component: ExtratoComponent,
  },
  {
    path: 'contador', component: ContadorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
