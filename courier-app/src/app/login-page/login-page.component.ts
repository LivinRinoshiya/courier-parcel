import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { SignupFormService} from '../signup-form.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup; 
  constructor(private fb:FormBuilder,private signup:SignupFormService,private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]],
    })
    
    }
  
  login(Formvalue:any)
 {
    console.log(Formvalue.email);
    this.signup.test_get(Formvalue.email).subscribe((data)=>{
      console.log("data returned from server",data);
      
       if(data.docs[0].email == Formvalue.email){
      this.router.navigate(['/pickup']);

      alert("data verified");
      }
    })
  }
}

