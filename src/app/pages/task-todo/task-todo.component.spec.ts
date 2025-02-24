import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTodoComponent } from './task-todo.component';

describe('TaskTodoComponent', () => {
  let component: TaskTodoComponent;
  let fixture: ComponentFixture<TaskTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
