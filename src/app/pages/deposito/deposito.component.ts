import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContaService } from 'src/app/service/conta/conta.service';
import { ContaEntradaService } from 'src/app/service/conta-entrada/conta-entrada.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  form: FormGroup;
  results = [];
  contas = [];
  constructor(private formBuilder: FormBuilder,
    private contaService: ContaService,
    private contaEntradaService: ContaEntradaService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      idConta: ['', Validators.required],
      vrOperacao: ['', Validators.required]
    });
    this.contaService.findAll(contas => {
      if (contas) {
        contas.forEach(conta => {
          conta.ds = conta.nrConta + ' (' + conta.dsPessoa + ')';
        });
      }
      console.log(contas);
      this.contas = contas;
    });
  }

  salvar() {
    console.log('1');
    if (this.form.invalid)
      return;
    let deposito = {
      idConta: this.form.value.idConta.idConta,
      vrOperacao: this.form.value.vrOperacao
    }
    this.contaEntradaService.depositar(deposito, () => {
      this.form.reset();
    });
  }

  setValues(value) {
    this.form.setValue({
      idConta: value.idConta,
      vrOperacao: parseInt(value.vrOperacao)
    });
  }

  search(event) {
    this.results = this.contas.filter(conta => {
      return conta.ds.toUpperCase().indexOf(event.query.toUpperCase()) !== -1;

    });
  }

}
