import { Component, Input, OnInit } from '@angular/core';
// import { Task, StatusType } from '../constants';
import { TaskService } from '../task.service';
import { Task, StatusType } from '../constants';


@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  @Input() statusType: StatusType;
  @Input() taskList: Task[];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
  }
  handleStatusChanged(task) {
    this.taskService.updateTask(task.id, task.status);
  }
}
