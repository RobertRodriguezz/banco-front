import { Component, OnInit } from '@angular/core';
import { PessoaFisicaService } from 'src/app/service/pessoa-fisica/pessoa-fisica.service';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css']
})
export class PessoaFisicaComponent implements OnInit {


  pessoas:any[]

  Robert = 'Marcelos';

  constructor(private pessoafisica: PessoaFisicaService) {


   }

  ngOnInit() {
    this.pessoafisica.findAll(pessoas => {
      console.log()
      
    }, erro =>{

    });
  }

}
