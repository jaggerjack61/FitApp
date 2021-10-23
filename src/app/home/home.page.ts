import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
  constructor(private router : Router){}

  gotoPush(){
    this.router.navigate(['./push']);
  }
  gotoPull(){
    this.router.navigate(['./pull']);
  }
  gotoLegs(){
    this.router.navigate(['./legs']);
  }
  gotoAbs(){
    this.router.navigate(['./abs']);
  }
 
}
