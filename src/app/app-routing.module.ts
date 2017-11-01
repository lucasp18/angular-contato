//import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';

//import { AppComponent } from './app.component';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ContatosDataBaseService } from './servicos/contatos-data-base.service';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './servicos/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';  //incompleto

const appRoutes: Routes = [
  { path: 'usuario-create', canActivate:[ AuthGuardService], component:DadosUsuarioComponent},
  { path: 'listar-usuarios', canActivate:[ AuthGuardService] ,component:ListaUsuarioComponent },
  { path: 'show-usuario/:id', canActivate:[ AuthGuardService] , component:DetalheUsuarioComponent},
  { path: 'login', component:LoginComponent },
  { path: '', redirectTo: "/login", pathMatch: 'full'},
  { path: 'dashboard', canActivate:[ AuthGuardService] ,component:DashboardComponent },
];


@NgModule({  
  imports: [
    RouterModule.forRoot(
        appRoutes,
        {enableTracing:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
