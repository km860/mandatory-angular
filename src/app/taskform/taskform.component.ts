import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  // @Input() obj: any;
  obj;
  @Output() onSave: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
    this.obj = {};
  }
  ngOnInit() {

  }
  save() {
    this.onSave.emit(this.obj);
  }
}
