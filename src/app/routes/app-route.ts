import { RouterModule, Routes } from '@angular/router';

import { TesteComponent } from '../pages/teste/teste.component';
import { AuthGuard } from '../routes/authguard/auth.guard';

import { PessoaFisicaComponent } from '../pages/pessoa-fisica/pessoa-fisica.component';
import { PessoaJuridicaComponent } from '../pages/pessoa-juridica/pessoa-juridica.component';
import { DepositoComponent } from '../pages/deposito/deposito.component';
import { SaqueComponent } from '../pages/saque/saque.component';
import { HomeComponent } from '../components/template/home/home.component';
import { CadastrarPessoaFisicaComponent } from '../pages/cadastrar-pessoa-fisica/cadastrar-pessoa-fisica.component';
import { CadastrarPessoaJuridicaComponent } from '../pages/cadastrar-pessoa-juridica/cadastrar-pessoa-juridica.component';


const appRoutes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'pessoa-fisica', component: PessoaFisicaComponent, canActivate: [AuthGuard]},
    {path: 'cadastrar-pessoa-fisica', component: CadastrarPessoaFisicaComponent, canActivate: [AuthGuard]},
    {path: 'pessoa-juridica', component: PessoaJuridicaComponent, canActivate: [AuthGuard]},
    {path: 'cadastrar-pessoa-juridica', component: CadastrarPessoaJuridicaComponent, canActivate: [AuthGuard]},
    {path: 'deposito', component: DepositoComponent, canActivate: [AuthGuard]},
    {path: 'saque', component: SaqueComponent, canActivate: [AuthGuard]},
    {path: 'teste', component: TesteComponent, canActivate: [AuthGuard]},
    {path:'**',redirectTo:'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes,{useHash: true});