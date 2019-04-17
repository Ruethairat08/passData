import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    public httpClient:HttpClient
  ) { }
  getdatastudent(){
    return this.httpClient.get('../../../assets/dataStudent.json').toPromise();
  }
}
