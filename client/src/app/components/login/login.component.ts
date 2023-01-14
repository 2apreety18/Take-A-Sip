import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

loginForm = this.fb.group({
  email:'',
  password:''
  // email: ['',Validators.required],
  // password: ['',Validators.required]
});

@Output() loginEvent = new EventEmitter();
 
constructor(private fb: FormBuilder, private auth : AuthService, private router: Router){}


ngOnInit(): void {
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
      this.auth.login(val.email, val.password).subscribe((res: any) => {
        localStorage.setItem('accessToken', res.headers.get('authorization'));
        localStorage.setItem('user', JSON.stringify(res.body.user));

        this.loginEvent.emit(true)

        if (res.body.user.usertype === 'admin') {
          this.router.navigate(['kitchen']);

        } else {
          this.router.navigate(['home']);
        }
        
      });
  }
}




}
