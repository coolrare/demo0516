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
    setTimeout(() => {
      this.sitename = 'The Will Will Web';
    }, 3000);
  }

}
