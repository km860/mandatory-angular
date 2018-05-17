import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task, StatusType } from '../constants';
import { TaskService } from '../task.service';


@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task;
  @Output() statusChanged = new EventEmitter<Task>();
  statusTypes: StatusType[] = [
    StatusType.NotStarted, StatusType.InProgress, StatusType.Completed
  ];
  constructor(private taskService: TaskService) {}

  changeStatus(event: any) {
    // this.taskService.updateTask(this.task.id, event.target.value);
    this.task.status = event.target.value;
    this.statusChanged.emit(this.task);
  }

  onClick(event) {
    this.taskService.removeItem(this.task.id);
  }
}
