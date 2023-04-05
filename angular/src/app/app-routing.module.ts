import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTransactionsComponent } from './components/employee-transactions/employee-transactions.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'employee-transactions',
    component: EmployeeTransactionsComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
