import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log("verificando se existem token")
      const token = window.localStorage.getItem('token')
      if(token){
        console.log("token encontrado e válido")
        console.log(token)
        return true
      }
      else{
        console.log("token não encontrado")
        this.router.navigate([''])
        return false;
      }
  }
  
}
