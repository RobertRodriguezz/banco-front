import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPessoaFisicaComponent } from './cadastrar-pessoa-fisica.component';

describe('CadastrarPessoaFisicaComponent', () => {
  let component: CadastrarPessoaFisicaComponent;
  let fixture: ComponentFixture<CadastrarPessoaFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPessoaFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
