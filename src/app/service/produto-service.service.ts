import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, Produto } from '../models/model';
import { BaseUrls } from './base-urls';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(BaseUrls.baseProduto)
  }

  findById(id: number): Observable<Produto> {
    return this.http.get<Produto>(BaseUrls.baseProduto +"/"+ id)
  }

  delete(id: number): Observable<Produto> {
    return this.http.delete<Produto>(BaseUrls.baseProduto +"/"+ id)
  }

  save(produto: Produto):  Observable<Produto>{
    return this.http.post<Produto>(BaseUrls.baseProduto +"/", produto)
  }

  update(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(BaseUrls.baseProduto +"/"+ id, produto)
  }
}
