import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FOODS } from './food-types';
import { Food } from './food';
import { SelectedFoodAttribute } from './selectedFoodAttribute';
import { OrderList } from './orderlist';

import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  url = 'http://localhost:6789/orders';  
  
  listItems: Food[] = [];
  selectedAttribute:  SelectedFoodAttribute[] = [];
//private http: HttpClient

  constructor(private http: HttpClient) { }

  //Data passing with Api
  getAllOrders(): Observable<OrderList[]> {
    const token = localStorage.getItem('accessToken');
    const httpOptions = {
      headers: {
        'Authorization': token ? token : ''
      }
    }

    return this.http.get<OrderList[]>(this.url, httpOptions);
  }
  
  //param: form value,listItem
  addOrder () : Observable<OrderList> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.post<OrderList>(this.url, httpOptions);
  }


  updateStatus (id: string, status: string) : Observable<OrderList> {
    const token = localStorage.getItem('accessToken');
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? token : ''
      }
    };

    return this.http.put<OrderList>(this.url + `/${id}/${status}`, {}, httpOptions);
  }

  deleteOrder(id: string) : Observable<OrderList> {
    const token = localStorage.getItem('accessToken');
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? token : ''
      }
    };
    return this.http.delete<OrderList>(this.url + `/${id}`,httpOptions);
  }
  
  //Food Sections
  getFoods(): Food[] {
    return FOODS;
  }

   getFood(id: number): Observable<Food | undefined> {
    const food = FOODS.find(food => food.id === id);
    console.log(food)
    return of(food);    
  }

  // getFood(id: number): Food | undefined{
  //   const food = FOODS.find(food => food.id === id);
  //  // console.log(food);
  //   return food;
  // }

 
 
  //List Part
  findItemById(listItems: any, id: number,selectedFlavor: string) {
    return listItems.find(function(item: { id: number,selectedFlavor: string }) {
      return item.id === id && item.selectedFlavor === selectedFlavor;
    });
  };

  addToList(food: Food, selectedAttribute: SelectedFoodAttribute) {

  let foodRef: Food = {
    id: 0,
    name: '',
    imageUrls: [],
    flavors: [],
    selectedFlavor: '',
    qty: 0,
    note: 'e.g. sugar 2 teaspoon(tsp.) ...'
  };
    Object.assign(foodRef,food);
    foodRef.selectedFlavor = selectedAttribute.flavor?.name
   
    var found = this.findItemById(this.listItems, foodRef.id, foodRef.selectedFlavor!);
    if (found) {
      found.qty += foodRef.qty;
    } else {
      this.listItems.push(foodRef);
    }

  }

  getListItems() {
    return this.listItems;
  }
  
  getSelectedItems() {
    return this.selectedAttribute;
  }

  clearList() {
    this.listItems = [];
    console.log(this.listItems)
    return this.listItems;
  }
  


}
