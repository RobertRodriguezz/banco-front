import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContaService } from 'src/app/service/conta/conta.service';

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
    private contaService: ContaService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      idConta: ['', Validators.required],
      vrOperacao: ['', Validators.required]
    });
    this.contaService.findAll(contas => {
      this.contas = contas;
    });
  }

  salvar() {

  }

  search(event) {
    this.results = this.contas.filter(conta =>{
      return conta.nrConta.toUpperCase().indexOf(event.query.toUpperCase()) !== -1
      || conta.dsPessoa.toUpperCase().indexOf(event.query.toUpperCase()) !== -1;
    });
  }

}
