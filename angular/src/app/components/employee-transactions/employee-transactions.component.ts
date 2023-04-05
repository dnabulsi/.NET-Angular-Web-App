import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeTransaction } from 'src/app/models/employeetransaction';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeTransactionService } from 'src/app/services/employeetransaction.service';

@Component({
  selector: 'app-employee-transactions',
  templateUrl: './employee-transactions.component.html',
  styleUrls: ['./employee-transactions.component.css']
})
export class EmployeeTransactionsComponent implements OnInit {
  @Output() employeeTransactionsUpdated = new EventEmitter<EmployeeTransaction[]>();
  title = 'EmployeeWebApp';
  employeeTransactions: EmployeeTransaction[] = [];
  filteredEmployeeTransactions: EmployeeTransaction[] = [];
  filtered?: number;
  employees: Employee[] = [];
  employee?: Employee;
  constructor(
    private employeeTransactionService: EmployeeTransactionService,
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.employeeTransactionService.getEmployeeTransactions().subscribe((result: EmployeeTransaction[]) => (this.employeeTransactions = result));
    this.employeeService.getEmployees().subscribe((result: Employee[]) => (this.employees = result));
  }

  filterEmployeeTransactions(id:string) {
    let num: number = parseInt(id);
    this.filteredEmployeeTransactions = this.employeeTransactions.filter((transaction) => transaction.empId === num);
    this.employee = this.employees.filter((employee) => employee.empId === num)[0];
    this.filtered = 1;
  }

}