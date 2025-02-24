import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilter',
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[], args?: TaskState): Task[] {
    if (args == 'completed') {
      return tasks.filter((t) => t.completed);
    }
    return tasks.filter((t) => !t.completed);
  }
}
