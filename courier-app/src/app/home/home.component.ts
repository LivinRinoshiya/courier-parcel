import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchTerm : string= '';
  image:string = "/images/image6.jpg";
 
  constructor() {
    console.log ('home');
   }

  ngOnInit(): void {
    console.log ('home');

  }
  

}
