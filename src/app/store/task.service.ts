import { Injectable, signal } from '@angular/core';
import { DBTasks } from '../../db';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>(DBTasks);

  markAsCompleted(taskId: number) {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }
  addNewTask(title: string) {
    const newTask: Task = {
      id: Date.now(), // Usamos timestamp como ID (podrías cambiarlo)
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }
  getPendingTasks() {
    return this.tasks().filter((task) => !task.completed);
  }

  getCompletedTasks() {
    return this.tasks().filter((task) => task.completed);
  }
}
