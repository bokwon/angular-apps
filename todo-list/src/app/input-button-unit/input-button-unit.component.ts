import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input [value]="title"
           (keyup.enter)="changeTitle($event.target.value)"
           #inputElement
           class="todo-input">
    <button class="btn" (click)="changeTitle(inputElement.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
