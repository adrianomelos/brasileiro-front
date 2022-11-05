import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/model';
import { BaseUrls } from './base-urls';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(login: Login){
    console.log("entrando na classe de serviço")
    return this.http.post<any>(BaseUrls.baseLogin, login, 
      {
        observe: 'response',
      });
  }
}
