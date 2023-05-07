import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { CadastrarAlunoComponent } from './cadastrar-aluno/cadastrar-aluno.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { CursoComponent } from './curso/curso.component';
import { DetalhesAlunoComponent } from './detalhes-aluno/detalhes-aluno.component';
import { DetalhesCursoComponent } from './detalhes-curso/detalhes-curso.component';
import { GuardGuard } from './guard/guard.guard';
import { HomeAlunoComponent } from './home-aluno/home-aluno.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SairComponent } from './sair/sair.component';

const routes: Routes = [
  {  path: '',  component: LoginComponent },
  {  path: 'login',  component: LoginComponent },
  {  path: 'home',  component: HomeComponent, children: [
    {  path: 'sair',  component: SairComponent },
    {  path: 'cursos',  component: CursoComponent },
    {  path: 'alunos',  component: AlunosComponent },
    {  path: 'cadastrarCurso',  component: CadastrarCursoComponent },
    {  path: 'detalheCurso/:id',  component: DetalhesCursoComponent },
    {  path: 'detalheAluno/:id',  component: DetalhesAlunoComponent },
    {  path: 'cadastrarAluno',  component: CadastrarAlunoComponent },
  ],
   canActivate: [GuardGuard]}, 
   {  path: 'homeAluno',  component: HomeAlunoComponent, children: [],
   canActivate: [GuardGuard]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
