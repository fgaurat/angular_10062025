import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Todo } from '../../../../core/models/todo';
import { TodoService } from '../../../../core/services/todo-service';
import { MessageQueueService } from '../../../../core/services/message-queue-service';
import { ActionTypes } from '../../../../core/enums/action-types';
@Component({
  selector: 'app-todo-form',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css'
})
export class TodoForm {
  todoService: TodoService = inject(TodoService);
  messageQueueService: MessageQueueService = inject(MessageQueueService)
  

  todoFormModel:Todo={
    title:"",
    completed:true
  }
  
  submitTodo(){
    this.messageQueueService.dispatch({
      type:ActionTypes.NEW_TODO,
      payload:this.todoFormModel
    })
    
    // console.log(this.todoFormModel)
    // this.todoService.save(this.todoFormModel).subscribe(()=>{
    // })
  }
}
