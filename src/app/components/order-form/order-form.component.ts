import { Component } from '@angular/core';
import { FoodService } from 'src/app/food.service';
import { FormBuilder, FormGroup,FormControl, Validators,AbstractControl, ValidationErrors } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/notification.service';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  
  listItems = this.listService.getListItems();
  orderForm = this.fb.group({
    firstName:'',
    lastName:'',
    designation:'',
    email:'',
    room:'',
    order:''
  });


  constructor(private listService: FoodService, private fb: FormBuilder,private http: HttpClient,private notificationService: NotificationService) { }

  onSubmit(formValue: any) {
    //later: how to send form data to service
    this.http.post('http://localhost:3000/orders', {user: formValue, foods: this.listItems, status: 'created'})
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
    this.notificationService.notifySuccess('Successfully submitted your order!','Congrats 🎉')
    this.orderForm.reset();
    // console.log(formValue);
    // console.log(this.listItems);

  }

}
