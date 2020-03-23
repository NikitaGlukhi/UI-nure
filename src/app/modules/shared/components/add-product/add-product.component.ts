import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent {
  @Input() index: number;
  @Input() name: string;
  @Input() price: string;
  @Input() count: number;

  addProduct() {
    document.getElementById('product' + this.index).classList.toggle('open');
  }

}
