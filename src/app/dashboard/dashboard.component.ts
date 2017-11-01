import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../servicos/autenticacao.service';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private autenticacao:AutenticacaoService, private router:Router) { }

  ngOnInit() {
  }

  deslogar(){
  	this.autenticacao.deslogarAcao().subscribe( (response:Response) => {
  		console.log(response.json());
       	this.autenticacao.setLogado(false);
  		this.router.navigate(['login']);
  	});	

  }
}
