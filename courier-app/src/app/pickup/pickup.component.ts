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
  pickUpForm!: FormGroup; 
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
   
   allUser: any;
   allUserData: any;
   store: any = [];
   obj: any;
   idValue: any;
   alert: any;
   data: any;
   response:any;
   formroup:any;

  constructor(private fb:FormBuilder,private pickUp:PickupService,private router:Router) { 
    this.pickUpForm = this.fb.group({
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
       
    this.pickUpForm = this.fb.group({
      name:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      mobile:['',[Validators.required,Validators.pattern("[0-9]{10}$")]],
      fromplace:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      toplace:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      date:['',[Validators.required]],

    });
    }
    
    get name() {return this.pickUpForm.get('name')!;}
    get email() {return this.pickUpForm.get('email')!;}
    get mobile() {return this.pickUpForm.get('mobile')!;}
    get fromdata() {return this.pickUpForm.get('fromdata')!;}
    get todata() {return this.pickUpForm.get('todata')!;}
    get date() {return this.pickUpForm.get('date')!;}
  
      register(Formvalue: any) {
        const pickUp ={
          name: Formvalue.name,
          email: Formvalue.email,
          mobile: Formvalue.mobile,
          fromplace: Formvalue.fromplace,
          toplace: Formvalue.toplace,
          date: Formvalue.date,
          type:"pickup"
           }
           
        console.log("from form", Formvalue);
        this.pickUp.add("courier-db",pickUp).subscribe((data) => {
          console.log("data returned from server", data);
          this.router.navigate(['/userdashboard']);

        })


   
  }
 
  }
 

