import { Component, OnInit } from '@angular/core';
import { PessoaJuridicaService } from 'src/app/service/pessoa-juridica/pessoa-juridica.service';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/service/conta/conta.service';


@Component({
  selector: 'app-pessoa-juridica',
  templateUrl: './pessoa-juridica.component.html',
  styleUrls: ['./pessoa-juridica.component.css']
})
export class PessoaJuridicaComponent implements OnInit {

  pessoas: any[] = [];
  pessoaSelecionada = null;
  exibeGeraConta = false;

  constructor(private pessoaJuridicaService: PessoaJuridicaService,
    private router: Router,
    private contaService: ContaService) { }

  ngOnInit() {
    this.pessoaJuridicaService.findAll(pessoas => {
      this.pessoas = pessoas;
      console.log(this.pessoas);
    });

  }

  novaPessoa() {
    this.router.navigate(['cadastrar-pessoa-juridica']);
  }

  openGerarContaDialog(pessoa) {
    this.pessoaSelecionada = pessoa;
    this.exibeGeraConta = true;
  }

  gerarConta(param) {
    this.contaService.createPessoaJuridica(param.idAgencia.idAgencia,
      this.pessoaSelecionada.idPessoaJuridica, () => {
        this.exibeGeraConta = false;
      });

  }

}
