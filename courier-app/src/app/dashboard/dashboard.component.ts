import { Component, OnInit } from '@angular/core';
import { PickupComponent } from '../pickup/pickup.component';
import { PickupService } from '../pickup.service';
import { FormGroup, FormBuilder,Validators,AbstractControl} from '@angular/forms';
// import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  array:any = [];
  data: any;
  allpickup: any;
  allpickupData: any;
  pickupRecord: any = {
    name: '',
    email: '',
    mobile: '',
   fromplace:'',
   toplace:'',
   date:'',
    "type": "pickup"
   };

  constructor( private build:FormBuilder, private pickup:PickupService) { 
this.register()
  }
  ngOnInit(): void {
  }
register() {
  let data = {
    selector: {
      type: "pickup"
    }
  }
  this.pickup.get(data).subscribe(res => {
    this.allpickup=res;
    console.log(res);
    this.allpickup = this.allpickup.docs;
    this.allpickupData = this.allpickup
    // .map((el: any)=>el.doc);
    console.log(this.allpickupData[0]);
    for (const array in this.allpickupData) {
      console.log(this.allpickupData[array])
    }
    
  }, rej => {
    alert("opps! Can not post data" + rej);
  });
  
  }
}



