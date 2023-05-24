import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee1.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeeListComponent implements OnInit{
  employee!:Employee[];
  ngOnInit(): void {
    this.getEmployees();
  }
  constructor(private employeeService:EmployeeService){}
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{this.employee=data;});
  }
}


