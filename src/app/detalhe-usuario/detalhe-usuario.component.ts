import { Component, OnInit, Input } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { HttpClient, HttpParams } from '@angular/common/http';
//import 'rxjs/add/operator/switchMap';
//import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {

	@Input() contato:ContatoModel;
  constructor(private http:HttpClient, private route: ActivatedRoute, private router:Router) { }
  //constructor(private http:HttpClient) { }
  ngOnInit() {
  	
  	let id:string = this.route.snapshot.paramMap.get('id');
  	let params = new HttpParams();
    params = params.append('id',id);
    console.log(id);
    this.http.get<ContatoModel>('http://localhost:8000/api/contato', {params:params}).subscribe((data :ContatoModel ) => {
      this.contato = data;
      console.log("teste"+data);
    });

  }

}
