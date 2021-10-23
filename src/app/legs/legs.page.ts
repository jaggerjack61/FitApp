import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-legs',
  templateUrl: './legs.page.html',
  styleUrls: ['./legs.page.scss'],
})
export class LegsPage implements OnInit {

  constructor(private router : Router){}

  gotoHome(){
    this.router.navigate(['./home']);
  }

  ngOnInit() {
  }

}
