import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl} from '@angular/forms';
import { PickupService } from '../pickup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {
  pickUpForm!: FormGroup; 
  
  userRecord: any = {
    name: '',
    mobile: '',
    fromplace:'',
    toplace:'',
    date:'',
   };
  userData: any;
   
  
  constructor(private fb:FormBuilder,private pickUp:PickupService,private router:Router) { 
    const userData =  localStorage.getItem("userData");
   if(userData){
   this.userData = JSON.parse(userData);
   }
    this.pickUpForm = this.fb.group({
      name: [this.userRecord.name],
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
      mobile:['',[Validators.required,Validators.pattern("[0-9]{10}$")]],
      fromplace:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      toplace:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      date:['',[Validators.required]],
    });

    }
   
    
    get name() {return this.pickUpForm.get('name')!;}
    get mobile() {return this.pickUpForm.get('mobile')!;}
    get fromdata() {return this.pickUpForm.get('fromdata')!;}
    get todata() {return this.pickUpForm.get('todata')!;}
    get date() {return this.pickUpForm.get('date')!;}
  
      register(Formvalue: any) {
        const pickUp ={
          name: Formvalue.name,
          mobile: Formvalue.mobile,
          fromplace: Formvalue.fromplace,
          toplace: Formvalue.toplace,
          email:this.userData.email,
          date: Formvalue.date,
          type:"pickup"
           }
           
        console.log("from form", Formvalue);
        this.pickUp.add("courier-db",pickUp).subscribe((data) => {
          console.log("data returned from server", data);
          this.router.navigate(['/userdashboard']);

        },err=>{
          console.error ("Unable to return data",err);
        })


   
  }
 
  }
 

