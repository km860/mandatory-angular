import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Task, StatusType } from './constants';

export class TaskService {
  // add class properties for:
  //
  // a task id counter
  // an internal array of Task objects
  // an instance of BehaviorSubject
  taskList: Task[];
  // stream: Observable<Task>[];
  observer;
  constructor() {
    const mockData = [
      {
        id: 1,
        status: StatusType.NotStarted,
        title: 'Mock title',
        description: 'Mock description',
      }
    ];
    // this.taskList = mockData;
    this.taskList = [];
  }
  // Takes arary of tasks and statusType, returns filteredArray
  filterTasks(statusType: StatusType, taskList: Task[] = []): Task[] {
    return taskList.filter((task) => {
      return task.status === statusType;
    });
  }

  removeItem(id: number) {
    this.taskList = this.taskList.filter((task) => {
      return task.id !== id;
    });
    this.observer.next(this.taskList);
  }

  getTasks(status: StatusType): Observable<Task[]> {
    // return an observable of a task array, filtered by the passed in status...
    return new Observable((observer) => {
      this.observer = observer;
      observer.next(this.taskList);
    });
  }

  updateTask(id: number, status: StatusType) {
    // complete the code to update a task's status...
    // this.taskList[id].status = status;
    const taskIndex = this.taskList.findIndex((task) => {
      return task.id === id;
    });
    this.taskList[taskIndex].status = status;
    return this.observer.next(this.taskList);
  }

  addTask(title: string, description: string) {
    // complete the code to add a task...
    const datum = Date.now();
    this.taskList.push({
      id: datum,
      status: StatusType.NotStarted,
      title: title,
      description: description,
    });
    return this.observer.next(this.taskList);
  }
}
