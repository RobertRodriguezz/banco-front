import { RouterModule, Routes } from '@angular/router';

import { TesteComponent } from '../pages/teste/teste.component';
import { PessoaFisicaComponent } from '../pages/pessoa-fisica/pessoa-fisica.component';
import { PessoaJuridicaComponent } from '../pages/pessoa-juridica/pessoa-juridica.component';
import { DepositoComponent } from '../pages/deposito/deposito.component';
import { SaqueComponent } from '../pages/saque/saque.component';
import { HomeComponent } from '../components/template/home/home.component';
import { AuthGuard } from '../routes/authguard/auth.guard';


const appRoutes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'pessoa-fisica', component: PessoaFisicaComponent, canActivate: [AuthGuard]},
    {path: 'pessoa-juridica', component: PessoaJuridicaComponent, canActivate: [AuthGuard]},
    {path: 'deposito', component: DepositoComponent, canActivate: [AuthGuard]},
    {path: 'saque', component: SaqueComponent, canActivate: [AuthGuard]},
    {path: 'teste', component: TesteComponent, canActivate: [AuthGuard]},
    {path:'**',redirectTo:'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes,{useHash: true});