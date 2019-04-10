import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  
  title = 'app';

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit() {
  }
 

  mobileMenuActive: boolean;

  onMobileMenuButton (event) {
    this.mobileMenuActive = !this.mobileMenuActive;
    event.preventDefault();
  }

  hideMobileMenu(event) {
    this.mobileMenuActive = false;
    event.preventDefault();
  }

  logout(event){
    this.keycloakService.logout();
  }
}
