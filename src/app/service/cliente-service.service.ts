import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/model';
import { BaseUrls } from './base-urls';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(BaseUrls.baseCliente)
  }

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(BaseUrls.baseCliente +"/"+ id)
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(BaseUrls.baseCliente +"/"+ id)
  }
  save(cliente: Cliente):  Observable<Cliente>{
    return this.http.post<Cliente>(BaseUrls.baseCliente +"/", cliente)
  }

  update(id: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(BaseUrls.baseCliente +"/"+ id, cliente)
  }
}

