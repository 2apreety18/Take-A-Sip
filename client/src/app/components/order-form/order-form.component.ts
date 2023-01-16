import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { FormBuilder} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/services/notification.service';
import { User } from 'src/app/interfaces/user';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit{
  
  errorMsg : string = '';
  listItems = this.listService.getListItems();
  orderForm = this.fb.group({
    room:'',
    order:''
  });
  user: User;
  isDialogVisible: boolean = false;
  

  ngOnInit () {
    const userStr = localStorage.getItem('user');
    this.user = userStr ? JSON.parse(userStr) : undefined;
    // this.greetings = 'Hi ' + this.user?.lastName + '!';
  }

  constructor(private listService: FoodService, private fb: FormBuilder,private http: HttpClient,private notificationService: NotificationService) { }

  onSubmit() {
    const val = this.orderForm.value;
    this.http.post('http://localhost:6789/orders', {user: this.user, foods: this.listItems, status: 'created', orderfor: val.order, room: val.room})
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
    this.notificationService.notifySuccess('Successfully submitted your order!','Congrats 🎉')
    this.orderForm.reset();
    this.listItems.length = 0;
  }

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }

  openDialog() {
    this.isDialogVisible = true;
  }

  closeDialog(e: any) {
    this.isDialogVisible = false;
  }

  dialogYes(e: any) {
    this.onSubmit();
    this.isDialogVisible = false;
  }

}
