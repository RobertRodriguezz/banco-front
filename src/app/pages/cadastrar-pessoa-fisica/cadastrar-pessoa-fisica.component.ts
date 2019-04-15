import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PessoaFisicaService } from 'src/app/service/pessoa-fisica/pessoa-fisica.service';

@Component({
  selector: 'app-cadastrar-pessoa-fisica',
  templateUrl: './cadastrar-pessoa-fisica.component.html',
  styleUrls: ['./cadastrar-pessoa-fisica.component.css']
})
export class CadastrarPessoaFisicaComponent implements OnInit {

  
  form: FormGroup;

  constructor(private pessoaFisicaService: PessoaFisicaService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      idPessoaFisica: [''],
      dsNome: ['', Validators.required],
      dsCpf: ['', Validators.required],
      dsTelefone: [''],
      dsEmail: [''],
      dtNasc: ['']
    });

  }

  voltar() {
    this.router.navigate(['pessoa-fisica']);
  }

  salvar() {
    if (this.form.invalid)
      return;

    this.pessoaFisicaService.save(this.form.value, () => {
      this.voltar();
    });
  }

}
