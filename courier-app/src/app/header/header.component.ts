import { Component } from '@angular/core';
import { PickupService } from '../pickup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
 
 
  constructor(public header: PickupService,private router: Router  ) { }

  
  logOut(){
    this.header.hide=false;
    this.header.show=true;
    this.router.navigate(['/login'])

  }

}
