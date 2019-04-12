import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-pessoa-juridica',
  templateUrl: './pessoa-juridica.component.html',
  styleUrls: ['./pessoa-juridica.component.css']
})
export class PessoaJuridicaComponent implements OnInit {
  
  pj: any[] = [
  {
    dsNomeFantasia:"robert",
    dsRazaoSocial:"212125",
    dsCnpj:"110-149-759-99",
    dsEmail:'robertcastilhos',

  },
  {
    cnpj:"00000000",
    nome:"robert",
    email:"ro@hotmail.com",
  }
];
  constructor() { }
  
  ngOnInit() {
    
    
        }

}
