import { DataService } from './../data.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item: any;

  @Input()
  keyword: string;

  constructor(public datasvc: DataService) { }

  ngOnInit() {
  }

}
