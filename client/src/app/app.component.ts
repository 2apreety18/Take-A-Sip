import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'take-a-sip';

  loggedIn = false;

  handleAuth(state: boolean) {
    this.loggedIn = state;
  }
}

