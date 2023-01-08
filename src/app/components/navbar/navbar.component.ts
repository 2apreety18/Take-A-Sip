import { Component } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  mugIcon = faMugHot;
  clipList = faClipboardList;
}
