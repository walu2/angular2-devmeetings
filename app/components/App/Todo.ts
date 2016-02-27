import {Component} from 'angular2/core';

@Component({
    selector: 'one-product',
    inputs: ['guy'],
    template: `
        <div>
            <input type="checkbox" [checked]="guy.checked" />
            {{ guy.title }} - {{ guy.price | currency }}
        </div>
    `
})
/*
export interface TodoAble {
  price: number;
  title: string;
  done: boolean;
}
*/
export class Todo {
     public todo;

     public price: number;
     public title: string;
     public done: boolean;
}
