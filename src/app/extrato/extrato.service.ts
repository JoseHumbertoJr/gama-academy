import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Transacao } from './extrato.interface';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {

  }

  getTransacoes(page: number){
    return this.http.get<Transacao[]>(this.API_URL+'/transacoes',{params:{
      _page: String (page),
    }});

    //simulaçao de erro
    const error = throwError('errin');
    return timer(3000).pipe(mergeMap(() => error));

  }

}
