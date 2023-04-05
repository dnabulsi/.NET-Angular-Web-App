import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { EmployeeTransactionsComponent } from './components/employee-transactions/employee-transactions.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    EditEmployeeComponent,
    EmployeeTransactionsComponent,
    EmployeesComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }