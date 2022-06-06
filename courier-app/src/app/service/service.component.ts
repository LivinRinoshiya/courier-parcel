import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { 
    console.log('service');
  }

  ngOnInit(): void {
    console.log('service');

  }

}
