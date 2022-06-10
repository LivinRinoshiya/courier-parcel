import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { SignupFormService} from '../signup-form.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminForm!: FormGroup; 
  constructor(private fb:FormBuilder,private signUp:SignupFormService,private router:Router, private toast:ToastrService) { }

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]],
    })
    
  }
  login(Formvalue:any)
  {
      this.signUp.admin_get(Formvalue.email).subscribe((data)=>{
      console.log("data returned from server",data);
       
      if(data.docs[0].email == Formvalue.email){
      this.router.navigate(['/dashboard']);
 
      this.toast.success('login successfully');
       }
     })
   }

}
