import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { FormBuilder} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  
  listItems = this.listService.getListItems();
  orderForm = this.fb.group({
    room:'',
    order:''
  });


  constructor(private listService: FoodService, private fb: FormBuilder,private http: HttpClient,private notificationService: NotificationService) { }

  onSubmit(formValue: any) {
    //later: how to send form data to service
    this.http.post('http://localhost:6789/orders', {user: formValue, foods: this.listItems, status: 'created', orderfor: formValue.order})
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
    this.notificationService.notifySuccess('Successfully submitted your order!','Congrats 🎉')
    this.orderForm.reset();
    this.listItems.length = 0;
    // console.log(formValue);
    // console.log(this.listItems);

  }

}
