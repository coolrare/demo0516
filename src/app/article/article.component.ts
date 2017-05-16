import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item: any;

  @Output()
  delete = new EventEmitter<any>();

  @Input()
  keyword: string;

  constructor() { }

  ngOnInit() {
  }

  doDelete() {
    this.delete.emit(this.item);
  }

}
