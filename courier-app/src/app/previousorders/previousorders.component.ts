import { Component, OnInit } from '@angular/core';
import { PickupService } from '../pickup.service';

@Component({
  selector: 'app-previousorders',
  templateUrl: './previousorders.component.html',
  styleUrls: ['./previousorders.component.css']
})
export class PreviousordersComponent implements OnInit {

  array:any=[];
  allUserData: any;
  allUser: any;
  data:any;
  parcelRecord: any;
  parceldetails: any =[];
  userData: any;
  constructor(private pickUp:PickupService ) { 
   const userData =  localStorage.getItem("userData");
   if(userData){
   this.userData = JSON.parse(userData);
   }
   this.register()  
  }

  ngOnInit(): void {
    console.log ('dashboard')
  }
  register() {
    const data = {
      selector: {
        type: "pickup",
        mobile:this.userData.mobile
      }
  }

  this.pickUp.getPrev(data).subscribe(res => {
    this.allUser=res;
    console.log(res);
    this.allUser = this.allUser.docs;
    this.allUserData = this.allUser
  });
 
  }
}

