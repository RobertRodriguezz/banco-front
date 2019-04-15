import { Component, OnInit } from '@angular/core';
import { PessoaFisicaService } from 'src/app/service/pessoa-fisica/pessoa-fisica.service';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/service/conta/conta.service';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css']

})
export class PessoaFisicaComponent implements OnInit {


  pessoas: any[] = [];
  exibeGeraConta = false;
  pessoaSelecionada = null;
  constructor(private pessoaFisicaService: PessoaFisicaService,
    private router: Router,
    private contaService: ContaService) { }

  ngOnInit() {
    this.pessoaFisicaService.findAll(pessoas => {
      this.pessoas = pessoas;
    });
  }

  novaPessoa() {
    this.router.navigate(['cadastrar-pessoa-fisica']);
  }

  openGerarContaDialog(pessoa) {
    this.pessoaSelecionada = pessoa;
    this.exibeGeraConta = true;
  }

  gerarConta(param) {
    this.contaService.createPessoaFisica(param.idAgencia.idAgencia,
      this.pessoaSelecionada.idPessoaFisica, () => {
        this.exibeGeraConta = false;
      });

  }


}
