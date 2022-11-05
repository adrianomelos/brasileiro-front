
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/model';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string = '';

  login: Login = {
    email: '',
    senha: ''
  }

  constructor(private loginService: LoginServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  fazerLogin(): void{
   
    this.loginService.login(this.login).subscribe(
      login => {
        if(login.status == 200){
         var c = login.body.token
          console.log( c );
          if( c ){
            window.localStorage.setItem("token",  c )
            this.router.navigate(['/home']);
          }
        }
      }, error => {
        alert("Usuário e/ou senha inválidos ou não encontrado")
      }
    )
  }
  
}
