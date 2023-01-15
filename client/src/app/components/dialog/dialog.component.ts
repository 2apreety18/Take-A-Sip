import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Output() noEvent = new EventEmitter();
  @Output() yesEvent = new EventEmitter();
  
  handleNo() {
    this.noEvent.emit(null);
  }

  handleYes() {
    this.yesEvent.emit(null);
  }
}
