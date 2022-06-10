import { Component } from '@angular/core';
import { PickupService } from '../pickup.service';

@Component({
  selector: 'app-contactdashboard',
  templateUrl: './contactdashboard.component.html',
  styleUrls: ['./contactdashboard.component.css']
})
export class ContactdashboardComponent  {

  array:any=[];
  allUserData: any;
  allUser: any;
  data:any;
  contactRecord: any;
  contactDetails: any;
  constructor(private pickUp:PickupService) { 
    this.register();
 
}
register() {
  const data = {
    selector: {
      type:"contact"
    }
  }
  this.pickUp.getUser(data).subscribe((res) => {
  this.allUser=res;
  console.log(res);
  this.allUser = this.allUser.docs;
  this.allUserData = this.allUser
});
}

  
}

