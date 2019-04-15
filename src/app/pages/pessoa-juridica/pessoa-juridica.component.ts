import { Component, OnInit } from '@angular/core';
import { PessoaJuridicaService } from 'src/app/service/pessoa-juridica/pessoa-juridica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-juridica',
  templateUrl: './pessoa-juridica.component.html',
  styleUrls: ['./pessoa-juridica.component.css']
})
export class PessoaJuridicaComponent implements OnInit {

  pessoas: any[] = [];
  constructor(private pessoaJuridicaService: PessoaJuridicaService,
    private router: Router) { }

  ngOnInit() {
    this.pessoaJuridicaService.findAll(pessoas => {
      this.pessoas = pessoas;
      console.log(this.pessoas);
    });

  }

  novaPessoa() {
    this.router.navigate(['cadastrar-pessoa-juridica']);
  }

}
