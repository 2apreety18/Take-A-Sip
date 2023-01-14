import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../../interfaces/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit{
  @Input() food: Food | undefined;
  imageUrl: string = "";

  constructor (private route: Router) {}


  ngOnInit(): void {
    this.imageUrl = this.food?.imageUrls[0] ?? '';

    const userStr = localStorage.getItem('user');
    const user = userStr ? JSON.parse(userStr) : null;

    if (!user) {
      this.route.navigate(['login']);
    } else if (user.usertype === 'admin') {
      this.route.navigate(['kitchen']);
    }
  }


}
