import { Component, OnInit } from '@angular/core';
import { PessoaFisicaService } from 'src/app/service/pessoa-fisica/pessoa-fisica.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css']

})
export class PessoaFisicaComponent implements OnInit {

  displayDialog: boolean;
  pessoas: any[] = [];

  constructor(private pessoaFisicaService: PessoaFisicaService,
    private router: Router) { }

  ngOnInit() {
    this.pessoaFisicaService.findAll(pessoas => {
      this.pessoas = pessoas;
    });
  }
  
  novaPessoa() {
    this.router.navigate(['cadastrar-pessoa-fisica']);
  }


}
