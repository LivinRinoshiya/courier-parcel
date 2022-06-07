import { Component, OnInit } from '@angular/core';
import { PickupService } from '../pickup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
 
  constructor(public header: PickupService,private router: Router  ) { }

  ngOnInit(): void {
    console.log('header');
  }
  logOut(){
    this.header.hide=false;
    this.header.show=true;
    this.router.navigate(['/login'])

  }

}
