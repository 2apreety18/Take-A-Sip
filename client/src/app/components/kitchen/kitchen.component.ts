import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { OrderList } from 'src/app/orderlist';
import { FoodService } from 'src/app/food.service';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { formatDistance } from 'date-fns'

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {
  rotate = faRotateRight;
  trash = faTrashCan;

  orders: OrderList[] = [];
  inProgress: OrderList [] = [];
  ready: OrderList [] = [];

  savedTime = new Date();
  refreshTime = formatDistance(
    new Date(this.savedTime),
    new Date(),
   { addSuffix: true }
  );

  constructor(private api: FoodService,private route: Router){}
  
  ngOnInit() : void {
    const userStr = localStorage.getItem('user');
    const user = userStr ? JSON.parse(userStr) : null;
    if (user.usertype !== 'admin') {
      this.route.navigate(['home']);
    }
    this.getOrders();
    setInterval(() => this.getRefreshTime(), 1000);
  }
  

  getOrders () : void {
    this.api.getAllOrders().subscribe(orders => {
      this.savedTime = new Date();
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

  refresh() {
    this.getOrders();
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

  emptyList() {
    this.ready.length = 0;    
  }
  removeOrder(id: string) {
  //  let index = this.ready.indexOf(order);
  //  this.ready.splice(index,1);
    // const deleteReadyOrder = this.ready.filter(order => order._id !== order._id)
    // this.ready = deleteReadyOrder;
    this.api.deleteOrder(id).subscribe(() => {});
    this.refresh();
  }

 
  drop(event: CdkDragDrop<OrderList[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

         event.container.data.forEach((eachOrder) => {
        if(event.container.id == 'cdk-drop-list-1') {
          this.updateOrderStatus(eachOrder._id,'in-progress');
        }
        if(event.container.id == 'cdk-drop-list-2') {
          this.updateOrderStatus(eachOrder._id,'ready');
        }
      });
      
    }
    
  }

  getRefreshTime() {
    const newTime = formatDistance(
      new Date(this.savedTime),
      new Date(),
     { addSuffix: true }
    );

    this.refreshTime = newTime;
  }
}
