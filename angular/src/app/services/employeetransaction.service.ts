import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { EmployeeTransaction } from '../models/employeetransaction';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTransactionService {
  private url = "EmployeeTransaction";

  constructor(private http: HttpClient) { }

  public getEmployeeTransactions(): Observable<EmployeeTransaction[]> {
    return this.http.get<EmployeeTransaction[]>(`${environment.apiUrl}/${this.url}`);
  }
}
