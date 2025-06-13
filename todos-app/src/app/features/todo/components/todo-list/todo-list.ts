import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../../../core/services/todo-service';
import { EMPTY, filter, merge, Observable, switchMap } from 'rxjs';
import { Todo, Todos } from '../../../../core/models/todo';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessageQueueService } from '../../../../core/services/message-queue-service';
import { Action } from '../../../../core/models/action';
import { ActionTypes } from '../../../../core/enums/action-types';
@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit,AfterViewInit {
  todoService: TodoService = inject(TodoService);
  messageQueueService: MessageQueueService = inject(MessageQueueService);

  todos$!: Observable<Todos>;
  // todos$:Observable<Todos>=EMPTY
  displayedColumns = [
    'id',
    'userId',
    'title',
    'completed',
    'chkCompleted',
    'actions',
  ];

  ngOnInit(): void {
    const delete$ = this.messageQueueService.bus$.pipe(
      filter((action:Action)=> action.type === ActionTypes.DELETE_TODO),
      switchMap((action:Action)=>this.todoService.delete(action.payload))
    )
    
    const add$ = this.messageQueueService.bus$.pipe(
      filter((action:Action)=> action.type === ActionTypes.NEW_TODO),
      switchMap((action:Action)=>this.todoService.save(action.payload))
    )
    
    const load$ = this.messageQueueService.bus$.pipe(
      filter((action:Action)=> action.type === ActionTypes.LOAD_TODOS)
    )

    this.todos$ = merge(delete$,add$,load$).pipe(
      switchMap(()=>this.todoService.getAll())
    )


    // this.todos$ = this.todoService.getAll();
    // this.messageQueueService.bus$.subscribe((action:Action)=>{
    //   console.log("TodoList",action)
    //   this.todos$ = this.todoService.getAll();
    // })
  }

  ngAfterViewInit(){
    this.messageQueueService.dispatch({
      type:ActionTypes.LOAD_TODOS
    })
  }

  delete(todo: Todo) {
    
    this.messageQueueService.dispatch({type:ActionTypes.DELETE_TODO,payload:todo})
    
    
    // this.todos$ = this.todoService.delete(todo).pipe(
    //   switchMap( () => this.todoService.getAll())
    // )
  }

  // todos!:Todos
  // ngOnInit(): void {
  //   this.todoService.getAll().subscribe(todos => this.todos=todos)
  // }
}
