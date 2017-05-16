import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'My WebSite';
  siteimage = '/assets/images/logo.png';

  constructor() { }

  ngOnInit() {
  }

  changeTitle($event) {
    this.sitename = 'The Will Will Web';
    console.log($event);
  }

}
