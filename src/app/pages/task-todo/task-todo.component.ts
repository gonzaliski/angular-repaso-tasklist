import { Component, effect } from '@angular/core';
import { TasksComponent } from '../../components/tasks/tasks.component';
import { TaskService } from '../../store/task.service';

@Component({
  selector: 'app-task-todo',
  imports: [TasksComponent],
  templateUrl: './task-todo.component.html',
  styleUrl: './task-todo.component.css',
})
export class TaskTodoComponent {
  pendingTasks: Task[];

  constructor(private taskService: TaskService) {
    effect(() => {
      this.pendingTasks = this.taskService.getPendingTasks();
    });
    this.pendingTasks = this.taskService.getPendingTasks();
  }
}
