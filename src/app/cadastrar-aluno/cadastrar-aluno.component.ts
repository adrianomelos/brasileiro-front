import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../models/model';
import { AlunoServiceService } from '../service/aluno-service.service';

@Component({
  selector: 'app-cadastrar-aluno',
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.css']
})
export class CadastrarAlunoComponent implements OnInit {

  constructor(private alunoService: AlunoServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  aluno: Aluno = {
    id: 0,
    nome: '',
    dataCadastro: '',
    vencimento: undefined,
    status: undefined,
    cpf: '',
    telefone: '',
    email: ''
  }

  save():void {
    this.alunoService.save(this.aluno).subscribe(retorno => {
      console.log(this.aluno)
      alert("cadastro realizado com sucesso!")
      this.router.navigate(['home/alunos']);
    }, err => {
      console.log(this.aluno)
      alert("Não foi possível cadastrar o curso")
    })
  }
  
}
