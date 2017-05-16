import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public datasvc: DataService) {
  }

  ngOnInit() {
  }

  doSearch(str: string) {
    this.title = str;
  }

  doClear(input: HTMLInputElement) {
    this.title = input.value = '';
  }

}
