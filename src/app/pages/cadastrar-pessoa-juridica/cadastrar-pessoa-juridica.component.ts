import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PessoaJuridicaService } from 'src/app/service/pessoa-juridica/pessoa-juridica.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-pessoa-juridica',
  templateUrl: './cadastrar-pessoa-juridica.component.html',
  styleUrls: ['./cadastrar-pessoa-juridica.component.css']
})
export class CadastrarPessoaJuridicaComponent implements OnInit {

  form: FormGroup;

  constructor(private pessoaJuridicaService: PessoaJuridicaService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      idPessoaJuridica: [''],
      dsNomeFantasia: ['', Validators.required],
      dsRazaoSocial: ['', Validators.required],
      dsCnpj: ['', Validators.required],
      dsTelefone: [''],
      dsEmail: ['']
    });

    this.route.params.subscribe(params => {
      if (params) {
        this.setValues(params);
      }
    });
  }

  setValues(value){
    this.form.setValue({
      idPessoaJuridica: value.idPessoaJuridica,
      dsNomeFantasia: value.dsNomeFantasia,
      dsRazaoSocial: value.dsRazaoSocial,
      dsCnpj: value.dsCnpj,
      dsTelefone: value.dsCnpj,
      dsEmail: value.dsCnpj
    });
  }

  voltar() {
    this.router.navigate(['pessoa-juridica']);
  }

  salvar() {
    if (this.form.invalid)
      return;

    this.pessoaJuridicaService.save(this.form.value, () => {
      this.voltar();
    });
  }

}
