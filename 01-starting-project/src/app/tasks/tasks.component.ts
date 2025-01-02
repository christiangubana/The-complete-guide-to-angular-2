import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskTypes } from './new-task/new-task.model';
import { TasksServices } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  constructor(private tasksService: TasksServices){
    
  }

  isAddingNewTask = false;

  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onAddNewTask() {
    this.isAddingNewTask = true;
  }

  onCancelAddingNewTask() {
    this.isAddingNewTask = false;
  }
}
