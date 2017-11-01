import { Component } from '@angular/core';
import { ContatoModel } from './modelos/contato-model';
import { ContatosDataBaseService } from './servicos/contatos-data-base.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ContatosDataBaseService]
})
export class AppComponent {
  title = 'app works!';
  contatoClicado2:ContatoModel;
  
  constructor(private contatosDataBaseService:ContatosDataBaseService){}

  valorPassado(id ) {
  	console.log('aquiii')
    this.contatoClicado2 = this.contatosDataBaseService.getContato(id);
  	//this.contatoClicado = contatoClicado;
  }


}
