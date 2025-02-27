import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../store/task.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  template: `
    <div class="add-form__container">
      <h2>Add task</h2>
      <form (submit)="addNewTask($event)">
        <input type="text" name="task-title" [(ngModel)]="taskTitle" />
        <button>+</button>
      </form>
    </div>
  `,
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  taskTitle = '';
  constructor(private taskService: TaskService) {}
  addNewTask(event: Event) {
    event.preventDefault();
    this.taskService.addNewTask(this.taskTitle);
    this.taskTitle = '';
  }
}
