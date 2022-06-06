
import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators,AbstractControl} from '@angular/forms';
import { SignupFormService} from '../signup-form.service';
import { HttpClient } from '@angular/common/http';  


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent  {

  checkout: FormGroup;
  submitted = false;
  userRecord: any ={
    country:'',
    station:'',
    name:'',
    email:'',
    number:'',
    feedback:'',

   };
  constructor(private fb:FormBuilder,private signup:SignupFormService, private http:HttpClient) { 

    this.checkout=this.fb.group({
      Country :[this.userRecord.country],
      Station:[this.userRecord. station],
      Name:[this.userRecord.name],
      Email:[this.userRecord.email],
      Number:[this.userRecord.number],
      Feedback:[this.userRecord.feedback],

      

    });
  }

  ngOnInit(): void {
    this.checkout = this.fb.group(
      {
        country:[
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        station:[
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        name:[
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        number:[
          '',
          [
            Validators.required,
            Validators.minLength(10),
          ]
        ],
        email:['',[Validators.required,Validators.email]],
       
      },
    
    );
    }
    get f(): {[key:string]:AbstractControl} {
      return this.checkout.controls;
    }

    onSubmit(Formvalue:any): void {
      console.log("Form:",Formvalue);
      this.signup.add1(Formvalue).subscribe((data) => {
        console.log("data returned from server",data);
      })
    }
  }
  
