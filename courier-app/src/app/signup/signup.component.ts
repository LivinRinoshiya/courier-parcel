import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { SignupFormService} from '../signup-form.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  loginForm!: FormGroup; 
  constructor(private fb:FormBuilder,private signUp:SignupFormService, private router:Router, private toast:ToastrService) { 
  }

  ngOnInit(): void {
   
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]],
    },
    );
    }
    
   
    login(FormValue:any){
      console.log("from form",FormValue);
     
     this.signUp.add(FormValue).subscribe((data)=>{
      console.log("data returned from server",data);
      this.toast.success('signed in successfully');
      this.router.navigate(['/login-page']);
      
      },err=>{
        console.error("unable to return data",err);
      })
    }
  }
  