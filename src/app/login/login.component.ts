import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../modelos/usuario-model';
import { AutenticacaoService } from '../servicos/autenticacao.service';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {

	private _login :string;
	private _senha :string;
	private erroAoLogar:boolean;
  constructor(private autenticacao:AutenticacaoService, private router:Router) {  this.erroAoLogar = false;}

  ngOnInit() {
  }

  submit(){
  	let usuario:UsuarioModel = new UsuarioModel(this._login, this._senha);
  	console.log(this._login);
  	this.autenticacao.autenticacao1(this._login, this._senha).subscribe( (response:Response) => {

      //this.token = response.json() && response.json().token;
      console.log('ap');
      //response.json().result
      console.log(response.json().response);
      if(response.json().response == 'error'){
        localStorage.clear(); //setItem("token","");
        this.autenticacao.setLogado(false);
        //this.logado = false;
        console.log('error ao logar');
        //return false;
      }else{
        localStorage.setItem("token",response.json().result.token);
        //this.logado = true;
        this.autenticacao.setLogado(true);
        console.log('logou');
        this.router.navigate(['dashboard']);
        //return true;
      }


    });
    //this.autenticacao.login(this._login, this._senha);
  	/*if( this.autenticacao.getLogado()){
  		this.erroAoLogar = false;
  		this.router.navigate(['dashboard']);
  	}else{
  		this._login = "";
  		this._senha = "";
  		console.log('não logou');
  		this.erroAoLogar = true;
  	}*/
  	
  }

  teste(){
  	this.autenticacao.teste();
  }

}
