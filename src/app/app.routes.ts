import { Routes } from '@angular/router';
import { TaskTodoComponent } from './pages/task-todo/task-todo.component';
import { TaskCompletedComponent } from './pages/task-completed/task-completed.component';

export const routes: Routes = [
  { path: '', component: TaskTodoComponent },
  { path: 'completed', component: TaskCompletedComponent },
];
