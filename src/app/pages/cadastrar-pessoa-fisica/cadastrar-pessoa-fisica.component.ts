import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PessoaFisicaService } from 'src/app/service/pessoa-fisica/pessoa-fisica.service';
import { MessageService } from 'primeng/api';
import { BreadcrumbService } from 'src/app/components/services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-cadastrar-pessoa-fisica',
  templateUrl: './cadastrar-pessoa-fisica.component.html',
  styleUrls: ['./cadastrar-pessoa-fisica.component.css']
})
export class CadastrarPessoaFisicaComponent implements OnInit {


  form: FormGroup;

  constructor(private pessoaFisicaService: PessoaFisicaService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      idPessoaFisica: [''],
      dsNome: ['', Validators.required],
      dsCpf: ['', Validators.required],
      dsTelefone: [],
      dsEmail: [],
      dtNasc: []
    });
    this.breadcrumbService.items = [
      {label: 'Pessoa Física'},
      {label: 'Cadastro'}
    ];
    this.route.params.subscribe(params => {
      if (params && params.idPessoaFisica) {
        this.setValues(params);
      }
    });

  }

  setValues(value) {
    this.form.setValue({
      idPessoaFisica: value.idPessoaFisica,
      dsNome: value.dsNome,
      dsCpf: value.dsCpf,
      dsTelefone: value.dsTelefone,
      dsEmail: value.dsEmail,
      dtNasc: value.dtNasc
    });
  }
  voltar() {
    this.router.navigate(['pessoa-fisica']);
  }

  salvar() {
    if (this.form.invalid)
      return;

    this.pessoaFisicaService.save(this.form.value, () => {
      this.messageService.add({severity:'success', detail:'Pessoa salva com sucesso!'});
      this.voltar();
    });
  }

}
