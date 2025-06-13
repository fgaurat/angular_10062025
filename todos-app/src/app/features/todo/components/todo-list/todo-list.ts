import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../../../core/services/todo-service';
import { EMPTY, Observable, switchMap } from 'rxjs';
import { Todo, Todos } from '../../../../core/models/todo';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
export class TodoList implements OnInit {
  todoService: TodoService = inject(TodoService);
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
    this.todos$ = this.todoService.getAll();
  }

  delete(todo: Todo) {
    this.todos$ = this.todoService.delete(todo).pipe(
      switchMap( () => this.todoService.getAll())
    )
  }

  // todos!:Todos
  // ngOnInit(): void {
  //   this.todoService.getAll().subscribe(todos => this.todos=todos)
  // }
}
