import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TaskTypes } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: TaskTypes;
  @Output() complete = new EventEmitter<string>();

  onClickCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
