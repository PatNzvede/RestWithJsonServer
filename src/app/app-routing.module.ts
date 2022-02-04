import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurantDashoboardComponent } from './restaurant-dashoboard/restaurant-dashoboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch :'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'restaurant', component:RestaurantDashoboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
