import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPessoaJuridicaComponent } from './cadastrar-pessoa-juridica.component';

describe('CadastrarPessoaJuridicaComponent', () => {
  let component: CadastrarPessoaJuridicaComponent;
  let fixture: ComponentFixture<CadastrarPessoaJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPessoaJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
