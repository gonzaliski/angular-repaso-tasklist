import { Component, effect } from '@angular/core';
import { TasksComponent } from '../../components/tasks/tasks.component';
import { TaskService } from '../../store/task.service';

@Component({
  selector: 'app-task-completed',
  imports: [TasksComponent],
  templateUrl: './task-completed.component.html',
  styleUrl: './task-completed.component.css',
})
export class TaskCompletedComponent {
  completedTasks: Task[];

  constructor(private taskService: TaskService) {
    effect(() => {
      this.completedTasks = this.taskService.getCompletedTasks();
    });
    this.completedTasks = this.taskService.getCompletedTasks();
  }
}
