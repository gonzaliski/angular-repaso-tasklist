import { Component, Input } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskFilterPipe } from '../../task-filter.pipe';
import { DBTasks } from '../../../db';

@Component({
  selector: 'app-tasks',
  imports: [TaskItemComponent, TaskItemComponent, TaskFilterPipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() type!: TaskState;
  tasks: Task[] = DBTasks;
}
