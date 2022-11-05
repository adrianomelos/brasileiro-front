import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../models/model';
import { PedidoServiceService } from '../service/pedido-service.service';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private service: PedidoServiceService,   private router: Router) { }
  total: number | undefined;
  pedidos: Pedido[] = []; 

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(retorno => {
      this.pedidos = retorno
      this.total = retorno.length;
      console.log(retorno)
    })
  }

  remover(id: number):void {
    if(confirm("Tem certeza que deseja remover o discurso?"))
      this.service.delete(id).subscribe(resposta => {
      console.log("removido com sucesso")
      this.findAll();
    }, error => {
      alert("Não foi possível remover o produto")
    })
  }

  editar(id:number){
    this.router.navigate(['home/cadastrarPedido/' + id])
  }
}
