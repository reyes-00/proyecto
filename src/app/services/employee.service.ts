import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  base: string = "https://backendresidencialiaa.herokuapp.com/";
  versionApi: string = "api/v1"
  URI: string = this.base + this.versionApi
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor( private http: HttpClient ) { }

  getEmployees() : Observable<any> {
    return this.http.get(`${this.URI}/employees`);
  }
  getEmployee(idEmployee: string) : Observable<any> {
    return this.http.get(`${this.URI}/employees/${idEmployee}`);
  }
  postEmployee(data: any): Observable<any>{
    return this.http.post(`${this.URI}/employees`, data).pipe(catchError(this.errorMgmt));
  }
  errorMgmt(error:HttpErrorResponse){
    let errorMessage ="";
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error Code:${error.status}\nMessage:${error.message}}`;
    }
    console.log(error.error)
    return throwError(error.error)
  }
  

}
