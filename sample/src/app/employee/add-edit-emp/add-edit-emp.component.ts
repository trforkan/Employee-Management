import { SharedService } from './../../service/shared.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() emp:any;
  
  EmployeeId: string = "";
  EmployeeName: string = "";
  Department: string = "";
  Email: string = "";
  // PhotoFileName: string = "";

  DepartmentsList: any = [];


  ngOnInit(): void {
    this.loadDepartmentList()
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe(response=>{
      this.DepartmentsList = response;

      this.EmployeeId = this.emp.EmployeeId;
      this.EmployeeName = this.emp.EmployeeName;
      this.Department = this.emp.Department;
      this.Email = this.emp.Email;
      // this.PhotoFileName = this.emp.PhotoFileName;
    })
  }

  addEmployee(){
    let val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      Email: this.Email,
      // PhotoFileName: this.PhotoFileName
    };
    console.log(val);
    this.service.addEmployee(val).subscribe(response => {
      alert(response.toString());
    });
  }

  updateEmployee(){
    let val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      Email: this.Email,
    };
    this.service.updateEmployee(val).subscribe(response => {
      alert(response.toString());
    });
  }
  // uploadPhoto(event){
  //   let file = event.target.files[0];
  //   const formData
  // }

}
