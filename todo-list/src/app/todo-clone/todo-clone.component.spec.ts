import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCloneComponent } from './todo-clone.component';

describe('TodoCloneComponent', () => {
  let component: TodoCloneComponent;
  let fixture: ComponentFixture<TodoCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoCloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
