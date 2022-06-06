import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SignupFormService {
  storedata(_Formvalue:any) {
    throw new Error('Method not implemented');
  }

  constructor(private http:HttpClient) { }
  add(formobject:any){
    console.log(formobject);
    return this.http.post("http://localhost:8000/signup",formobject);
  }
  add1(formobject:any){
    console.log(formobject);
    return this.http.post("http://localhost:8000/feedback",formobject);
  }
  
  add3(formobject:any){
    console.log(formobject);
    return this.http.post("http://localhost:8000/contact",formobject);
  }
  test_get(id:any)
  {
    return this.http.get<any>('http://localhost:8000/getlogin/'+id);

  }
  admin_get(id:any)
  {
    return this.http.get<any>('http://localhost:8000/getadmin/'+id);

  }
}

