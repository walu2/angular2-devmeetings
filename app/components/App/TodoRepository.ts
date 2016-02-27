import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {Todo} from './Todo'

@Injectable()
export class TodoRepository {
  public getObjects (http: Http): Todo[] {
    return http.get('todos.json').map(res => res.json())
  }
}
