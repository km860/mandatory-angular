import { Component, Input } from '@angular/core';
import { Task, StatusType } from '../constants';
import { TaskService } from '../task.service';


@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task;
  statusTypes: StatusType[] = [
    StatusType.NotStarted, StatusType.InProgress, StatusType.Completed
  ];
  constructor(private taskService: TaskService) {}

  changeStatus(event) {
    this.taskService.updateTask(this.task.id, event.target.value);
  }

  onClick(event) {
    this.taskService.removeItem(this.task.id);
  }
}
