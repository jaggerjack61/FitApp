import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-push',
  templateUrl: './push.page.html',
  styleUrls: ['./push.page.scss'],
})
export class PushPage implements OnInit {

  constructor(private router : Router){}

  gotoHome(){
    this.router.navigate(['./home']);
  }
  ngOnInit() {
  }

}
