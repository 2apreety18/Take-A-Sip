import { Component } from '@angular/core';
import { FOODS } from '../../food-types';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent {
  foods = FOODS;
}
