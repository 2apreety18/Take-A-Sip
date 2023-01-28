import { Component } from '@angular/core';
import { Food } from 'src/app/interfaces/food';
import { FoodService } from 'src/app/services/food.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  trash = faTrashCan;
  frontIcon = faArrowRightLong;
  plusIcon = faPlus;

  listItems = this.listService.getListItems();
   
  constructor(private listService: FoodService, private route: Router,private fb: FormBuilder,) { }

    ngOnInit() {
      const userStr = localStorage.getItem('user');
      const user = userStr ? JSON.parse(userStr) : null; 
    }

    emptyList() {
      this.listService.clearList();
    }
    removeItem(food: Food) {
     let index = this.listItems.indexOf(food);
     this.listItems.splice(index,1);
     //this.listService.removeSelectedItems();
    }
    onChange() {
     // this.listService.updateSelectedItems();
    }
   
}
