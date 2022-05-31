import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,AbstractControl} from '@angular/forms';
// import { SignupFormService} from '../signup-form.service';
import { HttpClient , HttpHeaders} from '@angular/common/http';  
import { PickupService } from '../pickup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {
  pickupForm!: FormGroup; 
  submitted = false;
  array:any = [];
  data: any;
  volunteerRecord: any = {
    name: '',
    email: '',
    mobile: '',
    fromdate:'',
    todate:'',
    date:'',
    "type": "pickup"
   };
  constructor(private fb:FormBuilder,private pickup:PickupService,private router:Router, private http:HttpClient) { 
  
}

  ngOnInit(): void {
   
    this.pickupForm = this.fb.group({
      name:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      mobile:['',[Validators.required,Validators.pattern("[0-9]{10}$")]],
      fromplace:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      toplace:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      date:['',[Validators.required,Validators.pattern("/^\d{1,2}\.\d{1,2}\.\d{4}$/")]],

    })
    }
    register(Formvalue: any) {
    
      const pickup = {
        name: Formvalue.name,
        email: Formvalue.email,
        mobile: Formvalue.mobile,
        fromplace: Formvalue.fromplace,
        toplace: Formvalue.toplace,
        date:Formvalue.date,
        type: "pickup"
  
      }
    this.pickup.add("courier-db", pickup).subscribe(res => {
      console.log(res);
      alert("Your data was posted successfully!");
      console.log('data posted')
    }, rej => {
      alert("opps! Can not post data" + rej);
    });
    // this.router.navigate(['dashboard'])
        }
}


