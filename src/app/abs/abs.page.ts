import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-abs',
  templateUrl: './abs.page.html',
  styleUrls: ['./abs.page.scss'],
})
export class AbsPage implements OnInit {

  constructor(private router : Router){}

  gotoHome(){
    this.router.navigate(['./home']);
  }

  ngOnInit() {
  }

}
