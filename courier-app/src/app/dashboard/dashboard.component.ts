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
    // this.register(Form)
    this.pickup.get("courier-db").subscribe((datas: any) => {
      console.log("ParcelDetails", datas)
      this.parcelRecord = datas.rows;
      this.parceldetails = this.parcelRecord.map((x:any) => x.doc);
    });
    
  }
  ngOnInit(): void {
  }
}



















  // register(Formvalue:any) {

    // let data = {
    //   selector: {
    //     type: "pickup"
    //   }
    // }
    
    // this.pickup.get("courier-db").subscribe((datas: any) => {
    //       console.log("ParcelDetails", datas)
          // this.parcelRecord = datas.docs;
          // this.parceldetails = this.parcelRecord;

    // this.pickup.get(data).subscribe((res:any) => {
    //   this.alluser=res;
    //   console.log(res);
    //   this.alluser = this.alluser.docs;
    //   this.alluserData = this.alluser;
    //   console.log(this.alluserData[0]);
    //   for (const array in this.alluserData) {
    //     console.log(this.alluserData[array])
//     });
// }

        // this.router.navigate(['dashboard']);
    // }, rej => {
    //   alert("opps! Can not post data" + rej);
    // });
    
    // }
// }
