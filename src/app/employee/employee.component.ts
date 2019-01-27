import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  employeeList: { name: string; salary: number; }[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeList = this.employeeService.getData();
  }


}
