import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  constructor(private http: HttpClient) {
  }
  saveEmployee(Employeedata) {
    return this.http.post('https://localhost:44350/emp', Employeedata);
  }
  updateEmployee(Employeedata) {
    return this.http.put('https://localhost:44350/emp', Employeedata);
  }
  getAllEmployee() {
    return this.http.get('https://localhost:44350/emp');
  }
  getEmployeeById(empid) {
    return this.http.get('https://localhost:44350/emp/' + empid);
  }
  deleteEmployeeById(empid) {
    return this.http.delete('https://localhost:44350/emp/' + empid);
  }

}
