import { EventEmitter , Injectable } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';


@Injectable()
export class ContatosDataBaseService {
  
  meusContatos: ContatoModel [] = [];
  enviarContato = new EventEmitter();
  constructor() { }

  setContato(contatoModel:ContatoModel) :void {
      this.meusContatos.push(contatoModel);
      this.enviarContato.emit(this.meusContatos);
  }

  getContato(id:number) :ContatoModel {
      let contatoModel: ContatoModel = this.meusContatos[id];
      return contatoModel;
  }
}
