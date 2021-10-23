import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pull',
  templateUrl: './pull.page.html',
  styleUrls: ['./pull.page.scss'],
})
export class PullPage implements OnInit {

  constructor(private router : Router){}

  gotoHome(){
    this.router.navigate(['./home']);
  }
  

  ngOnInit() {
  }

}
