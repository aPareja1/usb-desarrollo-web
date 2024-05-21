import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Task } from '../shared/interfaces/task.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  todo: string = '';
  todoList: Task[] = [];
  constructor(private todoService: TodoService){
    this.todoService.todoSubscription.subscribe((tasks: Task[]) => {
      this.todoList = tasks;
      console.log('Tareas actualizadas desde todocomponent: ', this.todoList);
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
  }

  deleteTask(id: number){
    this.todoService.deleteTask(id);
  }
}
