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
  
  userRecord: any = {
    name: '',
    mobile: '',
    fromplace:'',
    toplace:'',
    frompincode:'',
    topincode:'',
    price:''
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
      frompincode: [this.userRecord.frompincode],
      topincode: [this.userRecord.topincode],
      price: [this.userRecord.price],
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
      frompincode:['',[Validators.required,Validators.pattern("[0-9]{6}$")]],
      topincode:['',[Validators.required,Validators.pattern("[0-9]{6}$")]],
      price:['']
      
    });

    }
  
    
    get name() {return this.pickUpForm.get('name')!;}
    get mobile() {return this.pickUpForm.get('mobile')!;}
    get fromplace() {return this.pickUpForm.get('fromplace')!;}
    get toplace() {return this.pickUpForm.get('toplace')!;}
    get frompincode() {return this.pickUpForm.get('frompincode')!;}
    get topincode() {return this.pickUpForm.get('topincode')!;}
    get price() {return this.pickUpForm.get('price')!;}

      register(Formvalue: any) {
        const pickUp ={
          name: Formvalue.name,
          mobile: Formvalue.mobile,
          fromplace: Formvalue.fromplace,
          toplace: Formvalue.toplace,
          email:this.userData.email,
          frompincode: Formvalue.frompincode,
          topincode: Formvalue.topincode,
          price: Formvalue.price,
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
 

