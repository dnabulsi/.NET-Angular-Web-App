import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @Input() employee?: Employee;
  @Output() employeesUpdated = new EventEmitter<Employee[]>();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void { }

  updateEmployee(employee: Employee) {
    this.employeeService.updateEmployee(employee).subscribe((employees: Employee[]) => this.employeesUpdated.emit(employees));
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee).subscribe((employees: Employee[]) => this.employeesUpdated.emit(employees));
  }

  createEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee).subscribe((employees: Employee[]) => this.employeesUpdated.emit(employees));
  }

}
