import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { PickupService } from '../pickup.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup; 
  userRecord: any = {
    subject: '',
    name: '',
    mobile:'',
    email:'',
    place:'',
    feedback:'',
   

   };
  userData: any;
  constructor(private fb:FormBuilder,private pickUp :PickupService, private toast : ToastrService) { }

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      subject:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      name:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z]+")]],
      mobile:['',[Validators.required,Validators.pattern("[0-9]{10}$")]],
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      place:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      feedback:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z]+")]],
      _id:[''],
      _rev:['']
    })
  }

  get subject() {return this.contactForm.get('subject')!;}
  get name() {return this.contactForm.get('name')!;}
  get mobile() {return this.contactForm.get('mobile')!;}
  get email() {return this.contactForm.get('email')!;}
  get place() {return this.contactForm.get('place')!;}
  get feedback() {return this.contactForm.get('feedback')!;}

  register(FormValue:any){
    const contact ={
      subject: FormValue.subject,
      name: FormValue.name,
      mobile: FormValue.mobile,
      email: FormValue.email,
      place: FormValue.place,
      feedback: FormValue.feedback,
      type:"contact"
       }
    console.log("from form",FormValue);
    this.pickUp.add('courier-db',contact).subscribe((data)=>{
    console.log("data returned from server",data);
    this.toast.success('submitted successfully');
    },err=>{
      console.error("unable to return data",err);
    })
  }

}
