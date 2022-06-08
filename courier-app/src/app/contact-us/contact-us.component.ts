import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { SignupFormService} from '../signup-form.service';
import { HttpClient} from '@angular/common/http';  

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  successMessage:string ="";
  contactForm!: FormGroup; 

  constructor(private fb:FormBuilder,private signUp:SignupFormService, private http:HttpClient) { }

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      subject:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      name:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z]+")]],
      mobile:['',[Validators.required,Validators.pattern("[0-9]{10}$")]],
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      place:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      feedback:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z]+")]],

    })
  }
  register(FormValue:any){
    console.log("from form",FormValue);
   
   this.signUp.addContact(FormValue).subscribe((data)=>{
   
    console.log("data returned from server",data);
    })
  }

}
