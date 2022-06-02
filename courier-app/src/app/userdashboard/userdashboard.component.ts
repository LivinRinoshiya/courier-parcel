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
  alluserData: any;
  alluser: any;
  data:any;
  parcelRecord: any;
  parceldetails: any =[];
  constructor(private fb:FormBuilder,private pickup:PickupService,private router:Router ) { 
    this.pickup.get("courier-db").subscribe((datas: any) => {
      console.log("ParcelDetails", datas)
      this.parcelRecord = datas.rows;
      this.parceldetails = this.parcelRecord.map((x:any) => x.doc);
    });
    this.pickup.get1("courier-db").subscribe((datas: any) => {
      console.log("ParcelDetails", datas)
      this.parcelRecord = datas.rows;
      this.parceldetails = this.parcelRecord.map((x:any) => x.doc);
    });
    
    
  }

  ngOnInit(): void {
    
  }
  delete(id:any,rev:any){
    this.pickup.Delete(id,rev).subscribe(res=>{
      console.log(res);
      alert("Deleted sucessfully");
    })
  }
}
