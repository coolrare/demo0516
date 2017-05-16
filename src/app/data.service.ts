import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  data;

  constructor(private http: Http) {
    this.http.get('/api/articles.json')
      .subscribe( (res) => {
        this.data = res.json();
      });
  }

  doDelete(item) {
    let idx = this.data.indexOf(item);
    this.data.splice(idx, 1);
  }
}
