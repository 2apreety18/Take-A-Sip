import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FoodComponent } from './components/food/food.component';
import { FoodsComponent } from './components/foods/foods.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { ListComponent } from './components/list/list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodComponent,
    FoodsComponent,
    NavbarComponent,
    FoodPageComponent,
    ListComponent,
    KitchenComponent,
    OrderFormComponent,
    LoginComponent,
    RegisterComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatListModule,
    MatBadgeModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
