import { Component } from '@angular/core';
import { PickupService } from '../pickup.service';

@Component({
  selector: 'app-previousorders',
  templateUrl: './previousorders.component.html',
  styleUrls: ['./previousorders.component.css']
})
export class PreviousordersComponent  {

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

 
  register() {
    const data = {
      selector: {
        type: "pickup",
        email:this.userData.email
      }
  }

  this.pickUp.getUser(data).subscribe(res => {
    this.allUser=res;
    console.log(res);
    this.allUser = this.allUser.docs;
    this.allUserData = this.allUser
  });
 
  }
}

