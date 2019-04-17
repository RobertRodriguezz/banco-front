import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContaService } from 'src/app/service/conta/conta.service';
import { ContaEntradaService } from 'src/app/service/conta-entrada/conta-entrada.service';
import { MessageService } from 'primeng/api';
import { BreadcrumbService } from 'src/app/components/services/breadcrumb/breadcrumb.service';

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
    private contaEntradaService: ContaEntradaService,
    private messageService: MessageService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      idConta: ['', Validators.required],
      vrOperacao: ['', Validators.required]
    });
    this.breadcrumbService.items = [
      {label: 'Depósito'}
    ];
    this.contaService.findAll(contas => {
      if (contas) {
        contas.forEach(conta => {
          conta.ds = conta.nrConta + ' (' + conta.dsPessoa + ')';
        });
      }
      this.contas = contas;
    });
  }

  salvar() {
    if (this.form.invalid)
      return;
    let deposito = {
      idConta: this.form.value.idConta.idConta,
      vrOperacao: this.form.value.vrOperacao
    }
    this.contaEntradaService.depositar(deposito, () => {
      this.messageService.add({severity:'success', detail:'Depósito de R$ '+this.form.value.vrOperacao+',00 efetuado com sucesso!'});
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
