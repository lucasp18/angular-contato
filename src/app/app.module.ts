import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ContatosDataBaseService } from './servicos/contatos-data-base.service';
import { LoginComponent } from './login/login.component';
import { AutenticacaoService } from './servicos/autenticacao.service';
import { AuthGuardService } from './servicos/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosUsuarioComponent,
    DetalheUsuarioComponent,
    ListaUsuarioComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ContatosDataBaseService, AutenticacaoService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
