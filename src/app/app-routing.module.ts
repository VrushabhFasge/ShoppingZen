import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExistingLoginComponent } from './components/existing-login/existing-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuardGuard } from 'src/services/guard/auth-guard.guard';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PaymentsPageComponent } from './components/payments-page/payments-page.component';
const routes: Routes = [

  {path:"",component:LoginPageComponent},
  {path:"login",component:ExistingLoginComponent},
  {path:"home",component:HomePageComponent,canActivate:[AuthGuardGuard]},
  {path:"edit/:id",component:EditUserComponent,canActivate:[AuthGuardGuard]},
  {path:"cart",component:CartPageComponent,canActivate:[AuthGuardGuard]},
  {path:"checkout",component:PaymentsPageComponent,canActivate:[AuthGuardGuard]}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
