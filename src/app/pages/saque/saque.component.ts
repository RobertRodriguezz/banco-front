import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContaService } from 'src/app/service/conta/conta.service';
import { ContaSaidaService } from 'src/app/service/conta-saida/conta-saida.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  form: FormGroup;
  results = [];
  contas = [];

  constructor(private contaSaidaService: ContaSaidaService,
    private contaService: ContaService,
    private formBuilder: FormBuilder,
    private messageService: MessageService) { }

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
      this.contaSaidaService.sacar(deposito, () => {
        this.messageService.add({severity:'success', detail:'Saque de R$ '+this.form.value.vrOperacao+',00 efetuado com sucesso!'});
        this.form.reset();
      });
    }
  
    setValues(value) {
      this.form.setValue({
        idConta: value.idConta,
        vrOperacao: value.vrOperacao
      });
    }
  
    search(event) {
      this.results = this.contas.filter(conta => {
        return conta.ds.toUpperCase().indexOf(event.query.toUpperCase()) !== -1;
  
      });
    }

}
