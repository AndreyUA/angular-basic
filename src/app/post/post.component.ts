import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor() {}

  @Input('img') postImg: string = '';

  @Output() imgSelected = new EventEmitter<string>();

  ngOnInit(): void {}
}