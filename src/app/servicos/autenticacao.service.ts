import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

@Injectable()
export class AutenticacaoService {
  private logado:boolean;
  private token:string;
  private deslogado:boolean;
  constructor(private http:Http) { 
  	let currentUser:any = localStorage.getItem('currentUser'); 
  	this.token = currentUser && currentUser.token;
    this.logado = false;
  }

  setLogado(log:boolean){
    this.logado = log;
  }

  zeta(login:string, password:string){
    this.http.post('http://localhost:8000/api/auth/login',{email:login,password:password})
    .subscribe((response:Response) => {
      this.token = response.json() && response.json().token;
      console.log('ap');
      //response.json().result
      console.log(response.json().response);
      if(response.json().response == 'error'){
        localStorage.clear(); //setItem("token","");
        this.logado = false;
        console.log('error ao logar');
        return false;
      }else{
        localStorage.setItem("token",response.json().result.token);
        this.logado = true;
        console.log('logou');
        return true;
      }
      
      
    },
    error =>{
      console.log('deu algum error aqui');
      return false;
    });
  }

  getLogado(){
    return this.logado;
  }

  login(login:string, password:string){
  	this.autenticacao1(login, password).subscribe(
      (response:Response) => {

      this.token = response.json() && response.json().token;
      console.log('ap');
      //response.json().result
      console.log(response.json().response);
      if(response.json().response == 'error'){
        localStorage.clear(); //setItem("token","");
        this.logado = false;
        console.log('error ao logar');
        //return false;
      }else{
        localStorage.setItem("token",response.json().result.token);
        this.logado = true;
        console.log('logou');
        //this.router.navigate(['dashboard']);
        //return true;
      }
        

      });
    //console.log("fora do metodo");
    //console.log("local: " +localStorage.getItem("token"));
     //console.log('this.logado' + this.logado);

     //return this.logado;
   }

   autenticacao1(login:string,password:string){
     return this.http.post('http://localhost:8000/api/auth/login',{email:login,password:password});
   }


   teste(){
     let t:string = localStorage.getItem("token");
     //let t:string = "ttttttt";
     this.http.get("http://localhost:8000/api/user",{params:{token:t}})
     .subscribe( (response:Response)=> {
       console.log(response.json());
       this.logado = true;
     },
     error => {
       this.logado = false;
       console.log("deu erro");
     });

   }

   checkLogado():boolean{
      let t:string = localStorage.getItem("token");
     //let t:string = "ttttttt";
     this.http.get("http://localhost:8000/api/user",{params:{token:t}})
     .subscribe( (response:Response)=> {
       console.log(response.json());
       this.logado = true;
     },
     error => {
       this.logado = false;
       console.log("deu erro no checkLogado");
     });        
     return this.logado;
   }

   deslogarAcao(){
     let t:string = localStorage.getItem("token");
     
     //let t:string = "ttttttt";
     return this.http.get("http://localhost:8000/api/deslogar",{params:{token:t}});  
   }
   
   deslogar(){
     
     this.deslogarAcao().subscribe( (response:Response)=> {
       console.log(response.json());
       this.logado = false;
     },
     error => {
       this.logado = true;
       console.log("deu erro no deslogar");
     });        
     //console.log(deslogado);
     //return !this.logado;
   }


}
