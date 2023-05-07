
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
         var perfil = login.body.perfil
          console.log("token gerado: " + c);
          console.log("perfil: " + perfil);
          
          if( c ){
            window.localStorage.setItem("token",  c )
            if(perfil == "ADMIN"){
              this.router.navigate(['/home']);
            }else{
              this.router.navigate(['/homeAluno']);
            }
           
          }
        }
      }, error => {
        alert("Usuário e/ou senha inválidos ou não encontrado!")
      }
    )
  }
  
}
