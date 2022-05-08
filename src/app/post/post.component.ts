import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor() {
    console.log('this is constructor ', this.postImg);
  }

  @Input('img') postImg: string = '';

  @Output() imgSelected = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('this is ngOnInit ', this.postImg);
  }
}
