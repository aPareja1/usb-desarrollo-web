import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Task } from '../shared/interfaces/task.interface';
import { TodoService } from '../services/todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  formTodo = new FormGroup({
    todo: new FormControl('Hola', [Validators.required, Validators.maxLength(64)]),
    ownerMail: new FormControl('', [Validators.required, Validators.email])
  })
  todoList: Task[] = [];
  constructor(private todoService: TodoService){
    this.todoService.todoSubscription.subscribe((tasks: Task[]) => {
      this.todoList = tasks;
      console.log('Tareas actualizadas desde todocomponent: ', this.todoList);
    });
}

  addTask(){
    if(this.formTodo.valid){
      const task: Task = {
        id: 0,
        name: this.formTodo.get('todo')?.value || 'Nombre default',
        completed: false,
        createdAt: new Date()
      }
      this.formTodo.patchValue({todo: '', ownerMail: ''});
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
