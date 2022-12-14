import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginModel } from 'src/app/Models/LoginModel';
import { AutenticaService } from 'src/app/Services/Autentica.service';
import { LoginService } from 'src/app/Services/login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    public loginService : LoginService,
    private autenticaService: AutenticaService) 
  { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['',[Validators.required,Validators.email]],
        senha: ['',[Validators.required]]
      }
    )
  }

  submitLogin()
  {
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;
    this.loginService.LoginUsuario(dadosLogin).subscribe(
      token=>{
        debugger
        var nossoToken = Token
        this.autenticaService.DefinirToken(token)
        this.router.navigate(["/noticias"]);
      },
      erro=>{
        
      }
    )
  }
}
