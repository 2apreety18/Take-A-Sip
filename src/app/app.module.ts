import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';


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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodComponent,
    FoodsComponent,
    NavbarComponent,
    FoodPageComponent,
    ListComponent,
    KitchenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
