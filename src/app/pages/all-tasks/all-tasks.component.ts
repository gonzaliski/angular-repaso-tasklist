import { Component, effect } from '@angular/core';
import { TasksComponent } from '../../components/tasks/tasks.component';
import { TaskService } from '../../store/task.service';

@Component({
  selector: 'app-all-tasks',
  imports: [TasksComponent],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.css',
})
export class AllTasksComponent {
  tasks: Task[];

  constructor(private taskService: TaskService) {
    effect(() => {
      this.tasks = this.taskService.tasks();
    });
    this.tasks = this.taskService.tasks();
  }
}
