import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { PickupService } from '../pickup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  array:any=[];
  alluserData: any;
  alluser: any;
  data:any;
  parcelRecord: any;
  parceldetails: any =[];
  constructor(private fb:FormBuilder,private pickup:PickupService,private router:Router) { 
  this.pickup.get("courier-db").subscribe((datas: any) => {
    console.log("ParcelDetails", datas)
    this.parcelRecord = datas.rows;
    this.parceldetails = this.parcelRecord.map((x:any) => x.doc);
  });
}
  ngOnInit(): void {
  }
  
 
}
