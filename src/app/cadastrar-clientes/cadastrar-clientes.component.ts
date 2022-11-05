import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/model';
import { ClienteServiceService } from '../service/cliente-service.service';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {

  cliente: Cliente = {
    id: 0,
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    dataCadastro: ''
  }


  constructor(
    private service: ClienteServiceService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    if(id != null){
      this.service.findById(id).subscribe(retorno => {
        this.cliente = retorno
      });
    }
  }

  save():void {
    this.service.save(this.cliente).subscribe(retorno => {
      console.log(this.cliente)
      alert("cadastro realizado com sucesso!")
      this.router.navigate(['home/clientes']);
    }, err => {
      console.log(this.cliente)
      alert("Não foi possível cadastrar a categoria")
    })
  }

  update():void {
    this.service.update(this.cliente.id, this.cliente).subscribe(categorias => {
      console.log(this.cliente)
      alert("cadastro atualizado com sucesso!")
      this.router.navigate(['home/clientes']);
    }, err => {
      console.log(this.cliente)
      alert("Não foi possível atualizar o cliente")
    })
  }
}