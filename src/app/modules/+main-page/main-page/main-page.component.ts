import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [ './main-page.component.scss' ]
})

export class MainPageComponent {
  idx: number;
  products = [
    {
      name: 'Product',
      price: 12,
      count: 22
    },
    {
      name: 'Product',
      price: 12,
      count: 22
    },
    {
      name: 'Product',
      price: 12,
      count: 22
    },
    {
      name: 'Product',
      price: 12,
      count: 22
    },
    {
      name: 'Product',
      price: 12,
      count: 22
    },
    {
      name: 'Product',
      price: 12,
      count: 22
    },
    {
      name: 'Product',
      price: 12,
      count: 22
    },
    {
      name: 'Product',
      price: 12,
      count: 22
    },
    {
      name: 'Product',
      price: 12,
      count: 22
    },
    {
      name: 'Product',
      price: 12,
      count: 22
    },
    {
      name: 'Product',
      price: 12,
      count: 22
    }
  ];

  trackByFn(index: number): number {
    this.idx = index;
    return index;
  }
}
