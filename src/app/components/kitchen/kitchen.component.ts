import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent {
  orders: any [] = [
    // {name: 'afia', work:'Get to work'},
    'Pick up groceries',
    'Go home',
    'Fall asleep',
  ];
  inProgress: any [] = [
    'Learning JS',
    'Learning Angular',
    'Learning React',
    'Check e-mail',
    'Walk dog'
  ];
  ready: any [] = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
