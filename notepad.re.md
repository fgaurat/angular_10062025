# angular 10/06
https://notepad.re/angular
https://github.com/fgaurat/angular_10062025
Frédéric GAURAT



L’accès participant se fait via l’adresse https://docadmin.orsys.fr avec le mot de passe : 7KgUQ80q



https://nodejs.org/fr
https://angular.dev/

https://v17.angular.io/docs

npm install -g @angular/cli

npx @angular/cli@17 version

npx @angular/cli@17 new angular-tour-of-heroes

https://v17.angular.io/tutorial/tour-of-heroes/toh-pt0



https://reactivex.io/


https://rxjs.dev/


https://v17.angular.io/guide/lifecycle-hooks


https://v17.angular.io/tutorial/tour-of-heroes/toh-pt4#observable-data


https://excalidraw.com/#json=1IvJl4a1WBW0bmLKqM7eV,C3fXymVR8oz9xmWJhbGpFQ



https://bolt.new/


npm install angular-in-memory-web-api@0.17 --save
npm install angular-in-memory-web-api@0.18 --save
npm install angular-in-memory-web-api@0.19 --save

npm install angular-in-memory-web-api@20.0.3 --save 


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

https://excalidraw.com/#json=M1dZiby60H8zAP9un-B7b,gSc3qqEV3G3GEjCCc8rriA


https://rxmarbles.com/#debounceTime


https://www.youtube.com/watch?v=ak3MvMn8u18



https://www.learnrxjs.io/


https://rxjs.dev/operator-decision-tree


https://angular.dev/update-guide


https://www.originui-ng.com/


https://rxjs.dev/guide/testing/marble-testing


https://www.mockaroo.com/


https://jsonplaceholder.typicode.com/todos


npx json-server@0.17 todos.json --watch --delay 500 --port 3000

POST http://localhost:3000/todos/
Content-Type: application/json

{
    "userId": 1,
    "title": "New Todo !",
    "completed": false
}


REST Client
Huachao Mao
REST Client for Visual Studio Code

https://storybook.js.org/


ng g s core/services/todo-service

https://material.angular.dev/components/table/overview

https://material.angular.dev/components/checkbox
 
ng g c features/todo/components/todo-form


https://material.angular.dev/components/form-field/overview


---

<form (ngSubmit)="submitTodo()">
  
    <mat-form-field>
    <mat-label>Todo title</mat-label>
    <input required 
    name="todoTitle" 
    matInput 
    [(ngModel)] = "todoFormModel.title" 
    #todoTitle="ngModel"
    />
  </mat-form-field>

  valid: {{todoTitle.valid}}
  <br />
  
  <br />
  
  <mat-checkbox name="todoCompleted" [(ngModel)] = "todoFormModel.completed">Completed ?</mat-checkbox>
  <br />
  <button matButton="filled">Submit</button>

</form>


 
 
readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };



https://ngrx.io/


https://v17.angular.io/guide/component-interaction


https://excalidraw.com/#json=SRc_Esoi9A31v4Zbc2vQS,l4bz8eH1dP7X4XHl5vT2iQ

https://excalidraw.com/#json=unRsVlvRk93p5dzCMJM5n,bp8hhgjnqCcfa_teYoqPAQ


https://angular.dev/guide/forms


ng g c features/todo/components/todo-reactive-form

    this.todos$ = merge(delete$,add$,load$).pipe(
      switchMap(()=>this.todoService.getAll())
    )
    
    
      ngAfterViewInit(){
    this.messageQueueService.dispatch({
      type:ActionTypes.LOAD_TODOS
    })
  }


https://excalidraw.com/#json=pmxREc5eFH9AoiHmlJnZs,utrvyD3pZumxFvnUUW9How


https://github.com/reduxjs/redux-devtools


https://angular.dev/guide/signals

ng g c inc-component
ng g c show-component
ng g s count-signal-service

ng new routing-app

npx http-server .


export const routes: Routes = [
  { path: 'page01', component: Page01 },
  //{ path: 'page02', component: Page02 }
  { 
    path: 'page02', 
    loadComponent:()=>import("./pages/page-02/page-02").then(f=>f.Page02) 
    }
];



https://excalidraw.com/#json=oN47RCTLi9iM2xwnxbDT_,Pnf-qy0Lor20U02u-4Y0yg












