import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { OrderList } from 'src/app/orderlist';
import { FoodService } from 'src/app/food.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  orders: OrderList[] = [];
  inProgress: OrderList [] = [];
  ready: OrderList [] = [];
  
  constructor(private api: FoodService){}
  
  ngOnInit() : void {
    this.getOrders();
  }
  
  getOrders () : void {
    this.api.getAllOrders().subscribe(orders => {
      console.log("order", orders)
      this.orders = orders; 
      const created = orders.filter(order => order.status === 'created');
      this.orders = created;

      const prog = orders.filter(order => order.status === 'in-progress');
      this.inProgress = prog;

      const ready = orders.filter(order => order.status === 'ready');
      this.ready = ready;
    });
    console.log("hii",this.orders);
  }

  updateOrderStatus (id: string, status: string) {
    const updatedStatus = this.orders.map(order => {
      if (order._id === id) {
        order.status = status;
      }
      return order;
    })
    this.orders = updatedStatus;
    this.api.updateStatus(id, status).subscribe(() => {});
  }

 
  drop(event: CdkDragDrop<OrderList[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

     console.log(event.container.data);
     //console.log(event.container.data);
     event.container.data.forEach((eachOrder) => {
        //console.log(eachOrder._id);
        if(event.container.id == 'cdk-drop-list-1') {
          this.updateOrderStatus(eachOrder._id,'in-progress');
        }
        if(event.container.id == 'cdk-drop-list-2') {
          this.updateOrderStatus(eachOrder._id,'ready');
        }
      });
      
    }
    
  }


  

}
