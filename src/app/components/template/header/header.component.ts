import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from '../../template/template/template.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public template : TemplateComponent) { }

  ngOnInit() {
  }

}
