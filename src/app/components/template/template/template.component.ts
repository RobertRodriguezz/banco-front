import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { LoadingService } from '../../services/loading-service/loading.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  
  title = 'app';
  loading = false;

  constructor(private keycloakService: KeycloakService,
    public loadingService: LoadingService) { }

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
