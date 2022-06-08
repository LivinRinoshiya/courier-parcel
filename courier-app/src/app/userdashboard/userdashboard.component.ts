import { Component, OnInit } from '@angular/core';
import { PickupService } from '../pickup.service';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
 
  constructor(private pickUp:PickupService ) { 
   
  }

  ngOnInit(): void {
   }

   order=[{
     kg: 1,
   }]
   inc(prd: { kg: number; }) {
    if (prd.kg != 100) {
      prd.kg += 1;
    }
  }
  dec(prd: { kg: number; }) {
    if (prd.kg != 1) {
      prd.kg -= 1;
    }
  }

  total:number= 100;
  

  }
