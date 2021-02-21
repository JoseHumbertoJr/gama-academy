import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private htpp: HttpClient) { }

  logar(email: string, senha: string){
    if(email === 'jhumberto190@gmail.com' && senha === '123'){
      return of({
        usuario: {
          nome: 'José',
          sobrenome: 'Humberto',
          email: 'jhumberto190@gmail.com',
        },
        token: 'jnsfsfi1nSDas23dn23jn2332',
      }).pipe(
        delay(3000)
      );
    }
    return timer(3000).pipe(mergeMap(() => throwError('Erro generiques')));
  }
}
