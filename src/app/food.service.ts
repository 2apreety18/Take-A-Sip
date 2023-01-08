import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FOODS } from './food-types';
import { Food } from './food';
import { SelectedFoodAttribute } from './selectedFoodAttribute';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  listItems: Food[] = [];
  selectedAttribute:  SelectedFoodAttribute[] = [];


  constructor() { }

  getFoods(): Food[] {
    return FOODS;
  }

  getFood(id: number): Observable<Food | undefined> {
    const food = FOODS.find(food => food.id === id);
    return of(food);
  }
 
  //For List
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
    return this.listItems;
  }
 


}
