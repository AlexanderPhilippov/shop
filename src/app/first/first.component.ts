import { Component, OnInit } from '@angular/core';

import { Categories } from './categories.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Categories;
  isAvailable: boolean;

  constructor() { }

  ngOnInit() {
    this.name = 'Game of Thrones';
    // tslint:disable-next-line:max-line-length
    this.description = 'Summers span decades. Winters can last a lifetime. And the struggle for the Iron Throne begins. Based on the bestselling book series by George R.R. Martin and created by David Benioff and D.B. Weiss.';
    this.price = 2.5;
    this.category = Categories.BlueRay;
    this.isAvailable = true;
  }

}
