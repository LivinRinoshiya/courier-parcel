import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { PickupService } from '../pickup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  array:any=[];
  alluserData: any;
  alluser: any;
  data:any;
  parcelRecord: any;
  parceldetails: any =[];
  constructor(private fb:FormBuilder,private pickup:PickupService,private router:Router ) { 
 this.register()
    
  
  }
  ngOnInit(): void {
    console.log('successfull')
  }
  register() {
    const data = {
      selector: {
        type: "pickup"
      }

  }

  this.pickup.get1(data).subscribe(res => {
    this.alluser=res;
    console.log(res);
    this.alluser = this.alluser.docs;
    this.alluserData = this.alluser
     
    
  });
 
  }
}



















  