import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { PickupService } from '../pickup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {
  pickupForm!: FormGroup; 
  AppService:any;
  static find:any;
  array: any=[];
  userRecord: any = {
    name: '',
    email: '',
    mobile: '',
    fromdate:'',
    todate:'',
    date:'',
  
   
   };
   
   alluser: any;
   alluserData: any;
   store: any = [];
   obj: any;
   idValue: any;
   alert: any;
   data: any;
   response:any;
   formroup:any;

  constructor(private fb:FormBuilder,private pickup:PickupService,private router:Router) { 
    this.pickupForm = this.fb.group({
      name: [this.userRecord.name],
      email: [this.userRecord.email],
      mobile: [this.userRecord.mobile],
      fromplace: [this.userRecord.fromplace],
      toplace: [this.userRecord.toplace],
      date: [this.userRecord.date],
      _id:[''],
      _rev:['']
    });
    }
    ngOnInit(): void {
       
    this.pickupForm = this.fb.group({
      name:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      mobile:['',[Validators.required,Validators.pattern("[0-9]{10}$")]],
      fromplace:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      toplace:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      date:['',[Validators.required]],

    });
    }
    
    get name() {return this.pickupForm.get('name')!;}
    get email() {return this.pickupForm.get('email')!;}
    get mobile() {return this.pickupForm.get('mobile')!;}
    get fromdata() {return this.pickupForm.get('fromdata')!;}
    get todata() {return this.pickupForm.get('todata')!;}
    get date() {return this.pickupForm.get('date')!;}
  
      register(Formvalue: any) {
        const pickup ={
          name: Formvalue.name,
          email: Formvalue.email,
          mobile: Formvalue.mobile,
          fromplace: Formvalue.fromplace,
          toplace: Formvalue.toplace,
          date: Formvalue.date,
          type:"pickup"
           }
           
        console.log("from form", Formvalue);
        this.pickup.add("courier-db",pickup).subscribe((data) => {
          console.log("data returned from server", data);
          this.router.navigate(['/userdashboard']);

        })


   
  }
 
  }
 

