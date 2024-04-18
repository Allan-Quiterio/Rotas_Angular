import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { ModuleWithProviders } from '@angular/core';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

//Definindo todas as rotas
const AppRoutingModule: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cursos', component: CursosComponent },
  //Definindo uma rota que tenha um filho id
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: '', component: HomeComponent },
];

//Essa constante é a que contém as definições e configurações das nossas rotas em todo o projeto
export const Routing: ModuleWithProviders =
  RouterModule.forRoot(AppRoutingModule);
