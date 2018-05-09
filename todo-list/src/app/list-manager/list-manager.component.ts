import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-list-manager',
  template: `
  <div class="todo-app">
    <h1>
      {{ title }}
    </h1>
    <div class="todo-add">
      <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
    </div>

    <ul>
      <li *ngFor="let item of todoList">
        <app-todo-item [todoItem]="item"></app-todo-item>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'Todo List App';
  todoList;

  constructor(private todoListService:TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(item): void {
    this.todoListService.addItem(item);
  }
}
