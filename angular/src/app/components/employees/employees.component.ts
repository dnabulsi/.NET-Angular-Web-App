import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  @Output() employeesUpdated = new EventEmitter<Employee[]>();
  title = 'EmployeeWebApp';
  employees: Employee[] = [];
  employeeToEdit?: Employee;
  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((result: Employee[]) => (this.employees = result));
  }

  updateEmployeeList(employees: Employee[]) {
    this.employees = employees;
  }

  initNewEmployee() {
    this.employeeToEdit = new Employee();
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee).subscribe((employees: Employee[]) => this.employeesUpdated.emit(employees));
    location.reload();
  }

  editEmployee(employee: Employee) {
    this.employeeToEdit = employee;
  }
}