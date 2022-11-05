import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/model';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

  produto: Produto = {
    id: 0,
    nome: '',
    descricao: '',
  }


  constructor(
    private produtoService: ProdutoServiceService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    if(id != null){
      this.produtoService.findById(id).subscribe(retorno => {
        this.produto = retorno
      });
    }
  }

  save():void {
    this.produtoService.save(this.produto).subscribe(retorno => {
      console.log(this.produto)
      alert("cadastro realizado com sucesso!")
      this.router.navigate(['home/produtos']);
    }, err => {
      console.log(this.produto)
      alert("Não foi possível cadastrar a categoria")
    })
  }

  update():void {
    this.produtoService.update(this.produto.id, this.produto).subscribe(categorias => {
      console.log(this.produto)
      alert("cadastro atualizado com sucesso!")
      this.router.navigate(['home/produtos']);
    }, err => {
      console.log(this.produto)
      alert("Não foi possível atualizar o produto")
    })
  }
}
