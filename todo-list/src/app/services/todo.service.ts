import { Injectable } from '@angular/core';
import { Task } from '../shared/interfaces/task.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: Task[] = [];
  id = 0;
  public todoSubscription = new BehaviorSubject<Task[]>([]);
  getTodoList(){
      return this.todoList;
  }
  addTask(task: Task){
      task.id = this.id;
      this.todoList.push(task);
      this.id++;
      console.log(this.todoList);
      this.todoSubscription.next(this.todoList);
    }

  completeTask(id: number){
    const element = this.todoList.find(task => task.id === id);
    if(element){
      element.completed = true;
      element.completedAt = new Date();
    }
    this.todoSubscription.next(this.todoList);
   
  }

  deleteTask(id: number){
    this.todoList = this.todoList.filter(task => task.id !== id);
    this.todoSubscription.next(this.todoList);
   
  }

  constructor() { }
}
