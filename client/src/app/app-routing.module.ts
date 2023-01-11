import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { ListComponent } from './components/list/list.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

const routes: Routes = [ 
  {path: "kitchen", component: KitchenComponent},
  {path: "food/:id", component: FoodPageComponent},
  {path: "order", component: OrderFormComponent},
  {path: "list", component: ListComponent},
  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
