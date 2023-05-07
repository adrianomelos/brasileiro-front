import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../models/model';
import { CursoServiceService } from '../service/curso-service.service';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css']
})
export class CadastrarCursoComponent implements OnInit {

  constructor(private cursoService: CursoServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  curso: Curso = {
    id: 0,
    nome: '',
  }

  save():void {
    this.cursoService.save(this.curso).subscribe(retorno => {
      console.log(this.curso)
      alert("cadastro realizado com sucesso!")
      this.router.navigate(['home/cursos']);
    }, err => {
      console.log(this.curso)
      alert("Não foi possível cadastrar o curso")
    })
  }

}
