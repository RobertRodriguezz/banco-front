import { Component, OnInit } from '@angular/core';
import { PessoaFisicaService } from 'src/app/service/pessoa-fisica/pessoa-fisica.service';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css']
  
})
export class PessoaFisicaComponent implements OnInit {

  displayDialog: boolean;    
  pessoas:any[] = [
    {
      dsNome:"Marcelos Delgado Tuelher Dias",
      dtNasc:"17/10/1993",
      dsCpf:"09239528962",
      dsEmail:"marcelostuelher@gmail.com",
      dsTelefone:"(48)9 88029549"
    }
  ]

  constructor(private pessoafisica: PessoaFisicaService) {  }

  ngOnInit() {
    this.pessoafisica.findAll(pessoa => {
      console.log()
      
    }, erro =>{

    });
  }
  showDialogToAdd() {    
    this.displayDialog = true;
}
save() {
  let dsEmailNew = (<HTMLInputElement>document.getElementById("email")).value;
  let dsNomeNew = (<HTMLInputElement>document.getElementById("nome")).value;
  let dsCpfNew = (<HTMLInputElement>document.getElementById("cpf")).value;
  let dsTelefoneNew = (<HTMLInputElement>document.getElementById("telefone")).value;
  let dtNascNew = (<HTMLInputElement>document.getElementById("nascimento")).value;
  this.pessoas.push({
    dsNome:dsNomeNew,
    dtNasc:dtNascNew,
    dsCpf:dsCpfNew,
    dsEmail:dsEmailNew,
    dsTelefone:dsTelefoneNew
  });
}

}
