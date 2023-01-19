import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

errorMsg : string = '';
loginForm = this.fb.group({
  email:'',
  password:''
});

constructor(private fb: FormBuilder, private auth : AuthService, private router: Router){}

ngOnInit(): void {

  //If logged in, not letting go to login page --> redirecting to own home
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


login() {
  const val = this.loginForm.value;

  if (val.email && val.password) {
      if (val.password.length < 2) {
        this.errorMsg = 'Your password must be atleast 6 characters long.'
      } else {
        this.auth.login(val.email, val.password).subscribe({
          next: (res: any) => {
            localStorage.setItem('accessToken', res.headers.get('authorization'));
            console.log(res.headers.get('authorization'));
            localStorage.setItem('user', JSON.stringify(res.body.user));
            
            /*For going to page after loggin in without reload */
            if (res.body.user.usertype === 'admin') {
              this.router.navigate(['kitchen']);
    
            } else {
              this.router.navigate(['home']);
            }
        },
        error: error => this.errorMsg = error.error
        });
      }
      
  } else {
    this.errorMsg = 'Please enter email and password.'
  }
}




}
