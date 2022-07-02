import { SharedService } from './../../service/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  DepartmentList: any = [] ;

  constructor(private service: SharedService) { }

  ModalTitle: string = "";

  ActivateAddEditDepComp: boolean = false;

  dep:any;

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    // console.log("button pressed");
    this.dep={
      DepartmentId:0,
      DemartmentName:""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComp = true;
  }

  closeClick(){
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }

  editClick(item:any){
    // console.log(item);
    this.dep=item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepComp = true;
  }

  deleteClick(item:any){
    if(confirm("Are you sure ????")){
      this.service.deleteDepartment(item.DepartmentId).subscribe(response =>{
        alert(response.toString());
        this.refreshDepList();
      })
    }
  }

  refreshDepList(){
    this.service.getDepList().subscribe(response=>{
      this.DepartmentList = response;
      // console.log(response);
    })
  }

}
