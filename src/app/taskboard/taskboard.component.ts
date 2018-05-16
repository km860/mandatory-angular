import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task, StatusType } from '../constants';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {
  showForm: boolean;
  obj;
  taskList: Task[];
  statusTypes: StatusType[] = [
    StatusType.NotStarted, StatusType.InProgress, StatusType.Completed
  ];
  /* private statusList = [
    'NotStarted', 'InProgress', 'Completed'
  ]; */

  constructor(private taskService: TaskService) {
    this.obj = {};
  }
  ngOnInit() {
    this.showForm = false;
    // Added this
    this.taskService.getTasks(StatusType.NotStarted)
    .subscribe((list) => {
      this.taskList = list;
    });
  }
  filterTasks(statusType: StatusType, taskList: Task[]) {
    return this.taskService.filterTasks(statusType, taskList);
  }
  toggleForm() {
    return this.showForm = !this.showForm;
  }
  save(obj) {
    this.taskService.addTask(obj.title, obj.description);
   // this.showForm = !this.showForm;
  }

}
