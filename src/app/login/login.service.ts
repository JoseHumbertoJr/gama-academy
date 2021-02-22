import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from './../shared/services/auth/auth.service';
import { LoginResponse } from './login.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private authService: AuthService) { }

  logar(email: string, senha: string): Observable<LoginResponse>{
    if(email === 'jhumberto190@gmail.com' && senha === '123'){
      return of({
        usuario: {
          nome: 'José',
          sobrenome: 'Humberto',
          email: 'jhumberto190@gmail.com',
        },
        token: 'jnsfsfi1nSDas23dn23jn2332',
      }).pipe(
        delay(3000),
        tap(response => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
        })
      );
    }
    return timer(3000).pipe(mergeMap(() => throwError('Erro generiques')));
  }
}
