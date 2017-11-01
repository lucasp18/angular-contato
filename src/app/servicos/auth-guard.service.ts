import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AutenticacaoService } from '../servicos/autenticacao.service';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private autenticacao:AutenticacaoService, private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) :Observable<boolean>|Promise<boolean>|boolean {
  	//$token = localStorage.getItem("token")
  	//return this.autenticacao.checkLogado();  	
  	if(this.autenticacao.checkLogado()){
  		return true;	
  	}else{
  		this.router.navigate(['/login']);

  	}
  	return false;  	
  	//return Observable.of(true);
  	//return true;
  }


}
