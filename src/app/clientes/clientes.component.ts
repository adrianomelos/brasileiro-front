import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/model';
import { ClienteServiceService } from '../service/cliente-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = []; 
  total: number | undefined;

  constructor(private clienteService: ClienteServiceService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.clienteService.findAll().subscribe(retorno => {
      this.clientes = retorno
      this.total = retorno.length;
      console.log(retorno)
    })
  }

  remover(id: number):void {
    if(confirm("Tem certeza que deseja remover o discurso?"))
      this.clienteService.delete(id).subscribe(resposta => {
      console.log("removido com sucesso")
      this.findAll();
    }, error => {
      alert("Não foi possível remover o produto")
    })
  }

  editar(id:number){
    this.router.navigate(['home/cadastrarCliente/' + id])
  }
}
