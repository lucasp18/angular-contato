import { Component, OnInit ,EventEmitter ,Output} from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
 
	listaDeContatos: ContatoModel [];
  listaDeContatos2: ContatoModel [];
  modelClicado: ContatoModel;

  @Output() idClicado = new EventEmitter(); 
  constructor(private dataBaseService :ContatosDataBaseService ,private http:HttpClient , private router:Router , private route: ActivatedRoute) { }

  ngOnInit() {
  	this.dataBaseService.enviarContato.subscribe(contatos => this.listaDeContatos = contatos);
    this.http.get<ContatoModel[]>('http://localhost:8000/api/contato').subscribe((data :ContatoModel[] ) => {
      this.listaDeContatos2 = data;
      //console.log("teste"+data);
    });
  }

  contatoClicado(item:number){
  	console.log('zzzzzzzz ' +item);
  	
    //this.router.navigate(['show-usuario', {id:item}],{ relativeTo: this.route });
    this.router.navigate(['/show-usuario', item]);
    return this.idClicado.emit(item);
  }
}
