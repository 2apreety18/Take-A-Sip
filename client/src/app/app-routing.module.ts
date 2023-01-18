import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { ListComponent } from './components/list/list.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "kitchen", component: KitchenComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: "food/:id", component: FoodPageComponent, canActivate: [AuthGuard]},
  {path: "order", component: OrderFormComponent, canActivate: [AuthGuard]},
  {path: "list", component: ListComponent, canActivate: [AuthGuard]},
  {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: "register", pathMatch: "full"},
  {path: "**", component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
