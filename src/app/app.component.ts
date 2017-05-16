import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  doSearch($event: KeyboardEvent) {
    console.log($event);
    if($event.keyCode == 13) {
      this.title = ($event.target as HTMLInputElement).value;
    }
  }
}
