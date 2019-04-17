import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// primeng components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';
import { BlockUIModule } from 'primeng/blockui';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BreadcrumbModule } from 'primeng/breadcrumb';

// app components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { TemplateComponent } from './components/template/template/template.component';
import { AuthGuard } from './routes/authguard/auth.guard';
import { HomeComponent } from './components/template/home/home.component';
import { ErrorMsgComponent } from './components/messages/error-msg/error-msg.component';
import { HttpConfigInterceptor } from './components/interceptors/http-config.interceptor';


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
import { CadastrarPessoaFisicaComponent } from './pages/cadastrar-pessoa-fisica/cadastrar-pessoa-fisica.component';
import { CadastrarPessoaJuridicaComponent } from './pages/cadastrar-pessoa-juridica/cadastrar-pessoa-juridica.component';
import { ContaComponent } from './pages/conta/conta.component';
import { GerarContaDialogComponent } from './dialogs/gerar-conta-dialog/gerar-conta-dialog.component';


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
    SaqueComponent,
    CadastrarPessoaFisicaComponent,
    CadastrarPessoaJuridicaComponent,
    ErrorMsgComponent,
    ContaComponent,
    GerarContaDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    PanelModule,
    routing,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    MessageModule,
    AutoCompleteModule,
    TooltipModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ToastModule,
    BreadcrumbModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]

    },
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakBearerInterceptor,
      multi: true
    },*/
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    },
    MessageService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
