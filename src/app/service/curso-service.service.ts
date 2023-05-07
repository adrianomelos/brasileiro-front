import { Injectable } from '@angular/core';
import { Curso } from '../models/model';
import { BaseUrls } from './base-urls';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Curso[]> {
    let token = localStorage.getItem('token'); 
    if(token){
      token = token
    }else{
      token = ''
    }
    let headers = new HttpHeaders();

    headers = headers.set('Authorization', token);
    return this.http.get<Curso[]>(BaseUrls.baseCurso, {headers: headers})
  }

  save(curso: Curso):  Observable<Curso>{
    return this.http.post<Curso>(BaseUrls.baseCurso +"/", curso)
  }

  findById(id: number): Observable<Curso> {
    return this.http.get<Curso>(BaseUrls.baseCurso +"/"+ id)
  }

  delete(id: number): Observable<Curso> {
    return this.http.delete<Curso>(BaseUrls.baseCurso +"/"+ id)
  }
}
