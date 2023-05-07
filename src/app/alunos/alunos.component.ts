import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../models/model';
import { AlunoServiceService } from '../service/aluno-service.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor(private service: AlunoServiceService,
    private router: Router) { }

    alunos: Aluno[] = []; 

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(retorno => {
      this.alunos = retorno
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

  detalhes(id:number){
    this.router.navigate(['home/detalheAluno/' + id])
  }
}

