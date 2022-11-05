import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarClientesComponent } from './cadastrar-clientes/cadastrar-clientes.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { GuardGuard } from './guard/guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SairComponent } from './sair/sair.component';

const routes: Routes = [
  {  path: '',  component: LoginComponent },
  {  path: 'login',  component: LoginComponent },
  {  path: 'home',  component: HomeComponent, children: [
    {  path: 'sair',  component: SairComponent },
    {  path: 'produtos',  component: ProdutosComponent },
    {  path: 'clientes',  component: ClientesComponent },
    {  path: 'pedidos',  component: PedidosComponent },
    {  path: 'cadastrarProduto',  component: CadastrarProdutosComponent },
    {  path: 'cadastrarProduto/:id',  component: CadastrarProdutosComponent },
    {  path: 'cadastrarCliente',  component: CadastrarClientesComponent },
    {  path: 'cadastrarCliente/:id',  component: CadastrarClientesComponent }
  ], canActivate: [GuardGuard]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
