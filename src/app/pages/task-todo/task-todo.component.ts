import { Component } from '@angular/core';
import { TasksComponent } from '../../components/tasks/tasks.component';

@Component({
  selector: 'app-task-todo',
  imports: [TasksComponent],
  templateUrl: './task-todo.component.html',
  styleUrl: './task-todo.component.css',
})
export class TaskTodoComponent {
  filterType: TaskState = 'all';
}
