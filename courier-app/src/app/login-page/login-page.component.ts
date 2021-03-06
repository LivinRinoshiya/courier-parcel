import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { SignupFormService} from '../signup-form.service';
import { Router } from '@angular/router';
import { PickupService } from '../pickup.service'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup; 
  constructor(private fb:FormBuilder,private signUp:SignupFormService,private router:Router, private header:PickupService, private toast:ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]],
    })
    
    }
  
  login(Formvalue:any)
 {
    this.signUp.user(Formvalue.email).subscribe((data)=>{
      console.log("data returned from server",data);
      localStorage.clear();
      localStorage.setItem("userData",JSON.stringify(data['docs'][0]));
       if(data.docs[0].email == Formvalue.email){
        this.header.showOff();
      this.router.navigate(['/user']);

      this.toast.success('login successfull');
      }
    },err=>{
      console.error("unable to return data",err);
    })
  }
}

