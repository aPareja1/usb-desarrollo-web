import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { TodoService } from '../services/todo.service';
import { Task } from '../shared/interfaces/task.interface';

@Component({
  selector: 'app-todo-clone',
  templateUrl: './todo-clone.component.html',
  styleUrl: './todo-clone.component.css'
})
export class TodoCloneComponent {
  todo: string = '';
  todoList: Task[] = [];
  constructor(private todoService: TodoService){
    this.todoService.todoSubscription.subscribe((tasks: Task[]) => {
      this.todoList = tasks;
      console.log('Tareas actualizadas desde todo clone: ', this.todoList);
    });
  }

  addTask(){
    if(this.todo){
      const task: Task = {
        id: 0,
        name: this.todo,
        completed: false,
        createdAt: new Date()
      }
      this.todo = '';
      this.todoService.addTask(task);
      this.todoList = this.todoService.getTodoList();
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a task!'
      })
    }
  }

  completeTask(id: number){
   this.todoService.completeTask(id);
   this.todoList = this.todoService.getTodoList();
  }

  deleteTask(id: number){
    this.todoService.deleteTask(id);
    this.todoList = this.todoService.getTodoList();
  }
}
