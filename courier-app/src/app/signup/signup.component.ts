import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { SignupFormService} from '../signup-form.service';
import { HttpClient } from '@angular/common/http';  


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  successMessage:string ="";
  loginForm!: FormGroup; 
  constructor(private fb:FormBuilder,private signUp:SignupFormService, private http:HttpClient) { 


  }

  ngOnInit(): void {
   
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]],
      confirmpassword:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    },);
    }
    
   
    login(FormValue:any){
      console.log("from form",FormValue);
     
     this.signUp.add(FormValue).subscribe((data)=>{
     
      console.log("data returned from server",data);
      })
    }
  }
  