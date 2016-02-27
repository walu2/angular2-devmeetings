///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/bootstrap';
import {TodoRepository} from "./components/App/TodoRepository"
import App from './components/App/App';
import {HTTP_PROVIDERS, Http} from 'angular2/http';



bootstrap(App, [TodoRepository, HTTP_PROVIDERS]);
