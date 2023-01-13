import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  mugIcon = faMugHot;
  regForm = this.fb.group({
    firstName: '',
    lastName: '',
    designation: '',
    email: '',
    password: ''
  });
   
  constructor(private fb: FormBuilder, private auth : AuthService, private router: Router){}
  
  register() {
    const val = this.regForm.value;
  
    if (val.firstName && val.lastName && val.designation && val.email && val.password) {
        this.auth.register(val.firstName,val.lastName,val.designation,val.email,val.password).subscribe((res: any) => {
          localStorage.setItem('accessToken', res.headers.get('authorization'));
          localStorage.setItem('user', JSON.stringify(res.body.newUser));
          
          this.router.navigate(['home']);
        });
    }
  }
}
