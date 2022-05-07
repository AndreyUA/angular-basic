import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly name: string = 'Andrey';
  readonly imgURL: string =
    'https://i.pinimg.com/originals/10/11/c6/1011c6f3ffcdfa8c2f3f57a78d35fe1f.jpg';

  getName(): string {
    return this.name;
  }
}
