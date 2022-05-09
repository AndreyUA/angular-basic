import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly name: string = 'andrey zhygarev';
  imgURL: string = 'https://picsum.photos/id/237/400/400';
  images: Array<string> = [
    'https://picsum.photos/id/237/400/400',
    'https://picsum.photos/id/237/400/400',
    'https://picsum.photos/id/237/400/400',
    'https://picsum.photos/id/237/400/400',
  ];
  currentDate: Date = new Date();
  cost: number = 2_000;
  temperature: number = 25.3;
  pizza = {
    toppings: ['pepperoni', 'cheeze', 'pepper'],
    size: 'large',
  };
  blueClass: boolean = false;
  fontSize: number = 16;

  getName(): string {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImg(e: string) {
    console.log(e);
  }

  changeClass(): void {
    this.blueClass = !this.blueClass;
  }
}
