import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input-button-unit',
  // property binding
  template: `
    <input [value]="title"
           (keyup.enter)="changeTitle($event.target.value)" #inputElement>
    <button (click)="changeTitle(inputElement.value)">
      Save
    </button>
    <p>
      The title is {{ title }}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle(newString: string) {
    this.title = newString;
  }
}
