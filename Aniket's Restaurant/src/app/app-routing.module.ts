import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurentDsahComponent } from './restaurent-dsah/restaurent-dsah.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login',pathMatch: 'full'
  },
  {
   path: 'login', component:LoginComponent
  },
  {
    path:'restaurant',component:RestaurentDsahComponent
  },
  {
    path: 'signup', component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
