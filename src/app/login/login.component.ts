import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;

  email: string;
  password: string;


  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(form){

    if(!form.valid){
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();
      if(form.controls.email.invalid){
        this.emailInput.nativeElement.focus();
        return;
      }
      if(form.controls.password.invalid){
        this.passwordInput.nativeElement.focus();
        return;
      }

      return;
    }
    this.login();
  }
  login(){
    this.loginService.logar(this.email,this.password).subscribe(
      response => {
        console.log("Sucesso no Login!");
      },
      error => {
        console.log('Deu ruim! Não logou');
      }
    )
  }
  exibeErro(nomeControle:string, form: NgForm){
    if(!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle]?.touched;
  }

}
