import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component  {

  filteredString:string='';
  employee1:any=[];
  errMsg:any;
  constructor(proService:EmployeeService){
    proService.getEmpInfo().subscribe(
      result => this.employee1 = result,
      error => this.errMsg = error
    )
    }


}
