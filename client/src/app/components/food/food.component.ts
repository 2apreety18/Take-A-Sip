import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../../interfaces/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit{
  @Input() food: Food | undefined;
  imageUrl: string = "";

  constructor () {}


  ngOnInit(): void {
    this.imageUrl = this.food?.imageUrls[0] ?? '';
  }


}
