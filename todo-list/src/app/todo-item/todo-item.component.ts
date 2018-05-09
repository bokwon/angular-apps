import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
    <p>
      {{ todoItem.title }}
    </p>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: any;

  constructor() { }

  ngOnInit() {
  }

}
