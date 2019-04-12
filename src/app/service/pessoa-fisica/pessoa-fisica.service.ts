import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaFisicaService {
   url = 'http://54.185.223.116:8080/banco/rs/v1/pessoafisica';
  constructor( private http: HttpClient) { }

  findAll(sucess, err){
  const observe = 'response';

    this.http.get(this.url,{observe})
    .subscribe(pessoas => {
      sucess(pessoas);
    },erro => {
      err(erro);
    });
  }

}
