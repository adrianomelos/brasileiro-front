import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../models/model';
import { CursoServiceService } from '../service/curso-service.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor(private cursoService: CursoServiceService,
    private router: Router) { }

  cursos: Curso[] = []; 

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.cursoService.findAll().subscribe(retorno => {
      this.cursos = retorno
      console.log(retorno)
    })
  }

  remover(id: number):void {
    if(confirm("Tem certeza que deseja remover o discurso?"))
      this.cursoService.delete(id).subscribe(resposta => {
      console.log("removido com sucesso")
      this.findAll();
    }, error => {
      alert("Não foi possível remover o produto")
    })
  }

  detalhes(id:number){
    this.router.navigate(['home/detalheCurso/' + id])
  }
}
