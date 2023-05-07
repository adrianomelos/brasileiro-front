import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/model';
import { BaseUrls } from './base-urls';

@Injectable({
  providedIn: 'root'
})
export class AlunoServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Aluno[]> {
    let token = localStorage.getItem('token'); 
    if(token){
      token = token
    }else{
      token = ''
    }
    let headers = new HttpHeaders();

    headers = headers.set('Authorization', token);
    return this.http.get<Aluno[]>(BaseUrls.baseAluno + "/alunos", {headers: headers})
  }

  save(curso: Aluno):  Observable<Aluno>{
    return this.http.post<Aluno>(BaseUrls.baseAluno + "/aluno", curso)
  }

  findById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(BaseUrls.baseAluno +"/"+ id)
  }

  delete(id: number): Observable<Aluno> {
    return this.http.delete<Aluno>(BaseUrls.baseAluno +"/"+ id)
  }
}
