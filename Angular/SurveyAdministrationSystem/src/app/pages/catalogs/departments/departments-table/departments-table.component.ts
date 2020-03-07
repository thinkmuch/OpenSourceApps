import { Component, OnInit, Input } from '@angular/core';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-departments-table',
  templateUrl: './departments-table.component.html',
  styleUrls: ['./departments-table.component.css']
})
export class DepartmentsTableComponent implements OnInit {

  @Input("departmentsInput") departments: Array<Department>

  constructor() { }

  ngOnInit() {
  }

}
