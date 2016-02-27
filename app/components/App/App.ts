import {Component, View} from 'angular2/core';
import {COMMON_DIRECTIVES, Control} from 'angular2/common';
import {Todo} from "./Todo"
import {TodoRepository} from "./TodoRepository"
import {HTTP_PROVIDERS, Http} from 'angular2/http';

import "rxjs/add/operator/map";


@Component({
   selector: 'my-app',
   directives: [Todo, COMMON_DIRECTIVES],
   template: `<input type="text" [ngFormControl]="myInput" />
   <input type="button" value="Sort" (click)="onSort()"/>
   <one-product *ngFor="#todo of filtered_todos" [guy]="todo"></one-product>`
})

export default class App {
  private todos : Array<Todo>;

  public myInput = new Control();
  public filtered_todos : Array<Todo>;
  private sort_state = 0;

  constructor (todoRepo: TodoRepository, http: Http) {
       todoRepo.getObjects(http).subscribe((todos) => this.todos = todos)
       this.filtered_todos = this.todos;
       this.myInput.valueChanges.subscribe(value => this.onSearch(this.myInput));
   }

 public onSearch(searchInput){

   this.filtered_todos = this.todos.filter( function(val){
      if(val.title.indexOf(searchInput.value) != -1){
        return true;
      } else {
        return false;
      }
    });
 };

 public onSort() {
   switch(this.sort_state) {
     case 0:
      this.filtered_todos = this.filtered_todos.sort((a,b) => a.price - b.price);
      this.sort_state = 1;
      break;
     case 1:
      this.filtered_todos = this.filtered_todos.sort((a,b) => b.price - a.price);
      this.sort_state = 2;
      break;
     default:
      this.filtered_todos = this.filtered_todos;
      this.sort_state = 0;
      break;
   }
 }

};
