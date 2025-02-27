import { Routes } from '@angular/router';
import { TaskTodoComponent } from './pages/task-todo/task-todo.component';
import { TaskCompletedComponent } from './pages/task-completed/task-completed.component';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';

export const routes: Routes = [
  { path: '', component: AllTasksComponent },
  { path: 'pending', component: TaskTodoComponent },
  { path: 'completed', component: TaskCompletedComponent },
];
