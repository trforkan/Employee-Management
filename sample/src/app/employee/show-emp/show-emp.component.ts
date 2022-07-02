import { SharedService } from './../../service/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  EmployeeList: any = [] ;

  constructor(private service: SharedService) { }

  ModalTitle: string = "";

  ActivateAddEditEmpComp: boolean = false;

  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    // console.log("button pressed");
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      Email:"",
      PhotoFileName:""
    }
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  editClick(item:any){
    // console.log(item);
    this.emp=item;
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item:any){
    if(confirm("Are you sure ????")){
      this.service.deleteEmployee(item.EmployeeId).subscribe(response =>{
        alert(response.toString());
        this.refreshEmpList();
      })
    }
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(response=>{
      this.EmployeeList = response;
      // console.log(response);
    })
  }


}
