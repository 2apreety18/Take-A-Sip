import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FOODS } from '../../interfaces/food-types';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent {
  foods = FOODS;
  
  constructor (private route: Router) {}

  ngOnInit() {
    const userStr = localStorage.getItem('user');
    const user = userStr ? JSON.parse(userStr) : null;


  }
}
