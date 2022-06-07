import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { PickupService } from '../pickup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  array:any=[];
  allUserData: any;
  allUser: any;
  data:any;
  parcelRecord: any;
  parceldetails: any =[];
  constructor(private fb:FormBuilder,private pickUp:PickupService,private router:Router ) { 
   this.register()
   
    
    
  }

  ngOnInit(): void {
    console.log ('dashboard')
  }
  register() {
    const data = {
      selector: {
        type: "pickup"
      }

  }

  this.pickUp.get1(data).subscribe(res => {
    this.allUser=res;
    console.log(res);
    this.allUser = this.allUser.docs;
    this.allUserData = this.allUser
     
    
  });
 
  }
}
