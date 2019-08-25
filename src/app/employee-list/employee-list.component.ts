import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _service : EmployeeServiceService) { }

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  public ComponentData = [];

  

  fireEvent(){
    debugger;
    this.childEvent.emit("'Chills'");
  }

  ngOnInit() {
    this.ComponentData = this._service.getData();
  }

}
