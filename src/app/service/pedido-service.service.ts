import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pedido } from '../models/model';
import { BaseUrls } from './base-urls';

@Injectable({
  providedIn: 'root'
})
export class PedidoServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Pedido[]> {
    let token = localStorage.getItem('token'); 
    if(token){
      token = token
    }else{
      token = ''
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    return this.http.get<Pedido[]>(BaseUrls.basePedido, )
  }

  findById(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(BaseUrls.basePedido +"/"+ id)
  }

  delete(id: number): Observable<Pedido> {
    return this.http.delete<Pedido>(BaseUrls.basePedido +"/"+ id)
  }

  save(Pedido: Pedido):  Observable<Pedido>{
    return this.http.post<Pedido>(BaseUrls.basePedido +"/", Pedido)
  }

  update(id: number, Pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(BaseUrls.basePedido +"/"+ id, Pedido)
  }
}
