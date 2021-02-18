import '@angular/common/locales/global/pt';

import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './shared/components/contador/contador.component';
import { DiretivasComponent } from './shared/components/diretivas/diretivas.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgClassComponent } from './shared/components/ng-class/ng-class.component';
import { PipesComponent } from './shared/components/pipes/pipes.component';
import { HomeComponent } from './home/home.component';
import { ExtratoComponent } from './extrato/extrato.component';

registerLocaleData('pt');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContadorComponent,
    DiretivasComponent,
    NgClassComponent,
    PipesComponent,
    HomeComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
