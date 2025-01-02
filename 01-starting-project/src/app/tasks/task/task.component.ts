import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { type TaskTypes } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksServices } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: TaskTypes;
  private tasksService = Inject(TasksServices);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
