import { Component, Input } from '@angular/core';
import { DBTasks } from '../../../db';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskItemComponent, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() tasks!: Task[];
}
