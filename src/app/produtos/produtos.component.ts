import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../models/model';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = []; 
  total: number | undefined;

  constructor(private produtoService: ProdutoServiceService,   private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.produtoService.findAll().subscribe(retorno => {
      this.produtos = retorno
      this.total = retorno.length;
      console.log(retorno)
    })
  }

  remover(id: number):void {
    if(confirm("Tem certeza que deseja remover o discurso?"))
      this.produtoService.delete(id).subscribe(resposta => {
      console.log("removido com sucesso")
      this.findAll();
    }, error => {
      alert("Não foi possível remover o produto")
    })
  }

  editar(id:number){
    this.router.navigate(['home/cadastrarProduto/' + id])
  }
}
