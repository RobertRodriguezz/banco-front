import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from '../../template/template/template.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public template : TemplateComponent) { }

  ngOnInit() {
  }

}
