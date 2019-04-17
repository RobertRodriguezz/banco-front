import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/service/conta/conta.service';
import { BreadcrumbService } from 'src/app/components/services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {


  contas: any[] = [];

  constructor(private contaService: ContaService,
    private router: Router,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.items = [
      {label: 'Conta'}
    ];
    this.contaService.findAll(contas => {
      this.contas = contas;
    });
  }


}
