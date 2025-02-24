import { Component } from '@angular/core';
import { TasksComponent } from '../../components/tasks/tasks.component';

@Component({
  selector: 'app-task-completed',
  imports: [TasksComponent],
  templateUrl: './task-completed.component.html',
  styleUrl: './task-completed.component.css',
})
export class TaskCompletedComponent {
  filterType: TaskState = 'completed';
}
