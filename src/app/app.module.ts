import '@angular/common/locales/global/pt';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosComponent } from './contatos/contatos.component';
import { DetalhesContatosComponent } from './contatos/detalhes-contatos/detalhes-contatos.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { ContadorComponent } from './shared/components/contador/contador.component';

registerLocaleData('pt');
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExtratoComponent,
    NaoEncontradoComponent,
    ContatosComponent,
    ContadorComponent,
    DetalhesContatosComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
