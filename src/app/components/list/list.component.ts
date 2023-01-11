import { Component } from '@angular/core';
import { Food } from 'src/app/food';
import { FoodService } from 'src/app/food.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  trash = faTrashCan;
  listItems = this.listService.getListItems();
  selectedItems = this.listService.getSelectedItems();  
  //listItems: any;

   
  constructor(private listService: FoodService) { }
    emptyList() {
      this.listItems.length = 0;    
    }
    removeItem(food: Food) {
     let index = this.listItems.indexOf(food);
     this.listItems.splice(index,1);
    }

   
}
