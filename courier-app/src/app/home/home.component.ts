import { Component, OnInit } from '@angular/core';
import { PickupService } from '../pickup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchTerm : string= '';
  image:string = "/images/image6.jpg";
 
  constructor() { }

  ngOnInit(): void {
  }
  

}
