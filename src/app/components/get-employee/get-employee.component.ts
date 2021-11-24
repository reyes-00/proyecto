import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

  constructor( public service: EmployeeService ) { }

  employees: any;
  idEmployee:string = "";

  ngOnInit(): void {
    // this.getEmployees();
  }
  getEmployees(){
    this.service.getEmployees().subscribe(data => {
      this.employees = data
    })
  }
  getEmployee(){  
    this.service.getEmployee(this.idEmployee).subscribe(data => {
      this.employees = data
    })
  }

}
