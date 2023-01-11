import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../../food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit{
  @Input() food: Food | undefined;
  imageUrl: string = "";

  ngOnInit(): void {
    this.imageUrl = this.food?.imageUrls[0] ?? '';
  }
}
