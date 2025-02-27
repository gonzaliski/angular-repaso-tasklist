import { Component, Input } from '@angular/core';
import { TaskService } from '../../store/task.service';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task!: Task;
  isHovered = false;
  constructor(private taskService: TaskService) {}

  onHover(state: boolean) {
    this.isHovered = state;
  }
  completeTask(taskId: number) {
    this.taskService.markAsCompleted(taskId);
  }
}
