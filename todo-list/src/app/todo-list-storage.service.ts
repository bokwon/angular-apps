import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';
const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

@Injectable()
export class TodoListStorageService {
  private todoList;

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  }

  private findItemIndex(item) {
    debugger;
    return this.todoList.indexOf(item);
  }

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }

  // Get Item
  get() {
    return [...this.todoList];
  }

  // Add a new item
  post(item) {
    this.todoList.push(item);
    return this.update();
  }

  // Update an item
  put(item, changes) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }

  // Remove an item
  destroy(item) {
    this.todoList.splice(this.findItemIndex(item), 1);
    return this.update();
  }

}
