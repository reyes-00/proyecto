import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'
@Component({
  selector: 'app-post-employee',
  templateUrl: './post-employee.component.html',
  styleUrls: ['./post-employee.component.css']
})
export class PostEmployeeComponent implements OnInit {

  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefono: string = '';
  message: any = '';

  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
  }

  newEmployee(){
    let data ={
      first_name : this.nombre,
      last_name : this.apellido,
      email : this.email,
      phone : this.telefono
    }
    this.service.postEmployee(data).subscribe(data=>{
      this.message = data.message
      console.log(data)

    })
  }
}
