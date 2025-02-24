import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task!: Task;
  isHovered = false;

  onHover(state: boolean) {
    this.isHovered = state;
  }
  completeTask() {
    this.task.completed = !this.task.completed;
  }
}
