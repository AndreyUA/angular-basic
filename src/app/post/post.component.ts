import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnChanges,
    OnDestroy
{
  constructor() {
    console.log('this is constructor ', this.postImg);
  }

  @Input('img') postImg: string = '';

  @Output() imgSelected = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('this is ngOnInit ', this.postImg);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('this is ngOnChanges ', changes);
  }

  ngDoCheck(): void {
    console.log('this is ngDoCheck ');
  }

  ngAfterContentChecked(): void {
    console.log('this is ngAfterContentChecked ');
  }

  ngAfterContentInit(): void {
    console.log('this is ngAfterContentInit ');
  }

  ngAfterViewChecked(): void {
    console.log('this is ngAfterViewChecked ');
  }

  ngAfterViewInit(): void {
    console.log('this is ngAfterViewInit ');
  }

  ngOnDestroy(): void {
    console.log('this is ngOnDestroy ');
  }
}
