import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  mugIcon = faMugHot;
  errorMsg : string = '';
  
  regForm = this.fb.group({
    firstName: '',
    lastName: '',
    designation: '',
    email: '',
    password: '',
    confirmPassword:''
  });
   
  constructor(private fb: FormBuilder, private auth : AuthService, private router: Router){}

  ngOnInit(): void {
  //If logged in, not letting go to register page --> redirecting to own home
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user.usertype === 'admin') {
        this.router.navigate(['kitchen'])
      } else {
        this.router.navigate(['home'])
      }
    }
  }

  register() {
    const val = this.regForm.value;
  
    if (val.firstName && val.lastName && val.designation && val.email && val.password) {
      if (val.password.length < 6) {
        this.errorMsg = 'Your password must be atleast 6 characters long.'
      } else if (val.password != val.confirmPassword) {
        this.errorMsg = "Your password doesn't match."
      } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val.email))) {
        this.errorMsg = 'You have entered an invalid email address!'
      }
      else {
        this.auth.register(val.firstName,val.lastName,val.designation,val.email,val.password).subscribe({
          next: (res: any) => {
          localStorage.setItem('accessToken', res.headers.get('authorization'));
          localStorage.setItem('user', JSON.stringify(res.body.newUser));

          /*For going to page after loggin in without reload */
          this.router.navigate(['home']);
        },
        error: error => this.errorMsg = error.error
      });
    }
    } else {
      this.errorMsg = 'Please enter your information.'
    }  
  }



}
