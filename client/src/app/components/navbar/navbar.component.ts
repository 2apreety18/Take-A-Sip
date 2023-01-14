import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mugIcon = faMugHot;
  clipList = faClipboardList;
  
  loggedIn: boolean = false;
  checkAdmin: boolean = false;

  user?: User;
  greetings?: String;
  
  public sidebarShow: boolean = false;

  constructor (private route: Router) {}

  ngOnInit() {
    this.checkAuthStatus();

    this.route.events.subscribe(e => {
      this.checkAuthStatus();
    });
  }  

  checkAuthStatus () {
    const userStr = localStorage.getItem('user');
    this.loggedIn = userStr ? true : false;
    this.user = userStr ? JSON.parse(userStr) : undefined;
    this.greetings = 'Hi ' + this.user?.lastName + '!';
    this.checkAdmin = this.user?.usertype === 'admin' ? true : false;
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['login']);
  }
}
