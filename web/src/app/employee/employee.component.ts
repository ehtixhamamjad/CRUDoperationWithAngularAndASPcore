import { EmpService } from './emp.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emplyforms: FormGroup;
  emplyList;
  empid: number;
  btnChange: string = "Save";
  constructor(private fb: FormBuilder, private http: HttpClient, private empservice: EmpService) { }
  onsublit() {
    if (this.empid && this.empid > 0) {
      const empdataforupdate = {
        id: this.empid,
        name: this.emplyforms.controls.name.value,
        email: this.emplyforms.controls.email.value,
        password: this.emplyforms.controls.password.value
      };
      this.empservice.updateEmployee(empdataforupdate).subscribe(data =>
        this.GetEmploydata());
      this.emplyforms.reset();
    }
    else {
      console.log(this.emplyforms);
      this.empservice.saveEmployee(this.emplyforms.value).subscribe(data => {
        this.GetEmploydata();
      })
    }
    this.btnChange = "Save";
  }
  GetEmploydata() {
    this.empservice.getAllEmployee().subscribe(data => {
      this.emplyList = data;
    })
  }
  ngOnInit(): void {
    this.emplyforms = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    });
    this.GetEmploydata();

  }
  edit(id) {
    this.empservice.getEmployeeById(id).subscribe(data => {
      this.empid = id;
      this.btnChange = "Update"
      this.emplyforms.patchValue(data);
    });
  }
  DeleteFunction(id) {
    this.empservice.deleteEmployeeById(id).subscribe(data => {
      this.GetEmploydata();
    });
  }

}
