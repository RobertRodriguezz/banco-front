import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/service/conta/conta.service';


@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {


  contas: any[] = [];

  constructor(private contaService: ContaService,
    private router: Router) { }

  ngOnInit() {
    this.contaService.findAll(contas => {
      this.contas = contas;
    });
  }


}
