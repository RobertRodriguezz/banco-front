import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
// primeng components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';

// app components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { TemplateComponent } from './components/template/template/template.component';
import { AuthGuard } from './routes/authguard/auth.guard';
import { HomeComponent } from './components/template/home/home.component';
//router
import { routing } from './routes/app-route';

//keycloak
import { KeycloakService, KeycloakAngularModule, KeycloakBearerInterceptor } from 'keycloak-angular';
import { initializer } from './utils/app-init';

//pages
import { TesteComponent } from './pages/teste/teste.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { PessoaFisicaComponent } from './pages/pessoa-fisica/pessoa-fisica.component';
import { PessoaJuridicaComponent } from './pages/pessoa-juridica/pessoa-juridica.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { PessoaFisicaService } from './service/pessoa-fisica/pessoa-fisica.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TemplateComponent,
    TesteComponent,
    HomeComponent,
    FooterComponent,
    PessoaFisicaComponent,
    PessoaJuridicaComponent,
    DepositoComponent,
    SaqueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    PanelModule,
    routing,
    HttpClientModule,
    TableModule
  ],
  providers: [
    PessoaFisicaService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService],    
      
    },{
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakBearerInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
