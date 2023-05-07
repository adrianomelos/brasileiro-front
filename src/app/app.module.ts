import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SairComponent } from './sair/sair.component';
import { MatCardModule } from '@angular/material/card';
import { CursoComponent } from './curso/curso.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CadastrarAlunoComponent } from './cadastrar-aluno/cadastrar-aluno.component';
import { DetalhesCursoComponent } from './detalhes-curso/detalhes-curso.component';
import { DetalhesAlunoComponent } from './detalhes-aluno/detalhes-aluno.component';
import { HomeAlunoComponent } from './home-aluno/home-aluno.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SairComponent,
    CursoComponent,
    CadastrarCursoComponent,
    AlunosComponent,
    CadastrarAlunoComponent,
    DetalhesCursoComponent,
    DetalhesAlunoComponent,
    HomeAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
