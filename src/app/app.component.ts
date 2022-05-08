import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly name: string = 'andrey zhygarev';
  imgURL: string = 'https://picsum.photos/id/237/400/400';

  getName(): string {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImg(e: string) {
    console.log(e);
  }
}
