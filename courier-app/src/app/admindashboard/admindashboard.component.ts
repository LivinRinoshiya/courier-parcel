import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { PickupService } from '../pickup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent  {
  array:any=[];
  allUserData: any;
  allUser: any;
  data:any;
  parcelRecord: any;
  parcelDetails: any =[];
  constructor(private fb:FormBuilder,private pickUp:PickupService,private router:Router) { 
  this.pickUp.get("courier-db").subscribe((datas: any) => {
    console.log("ParcelDetails", datas)
    this.parcelRecord = datas.rows;
    this.parcelDetails = this.parcelRecord.map((x:any) => x.doc);
  });
}
  
}
