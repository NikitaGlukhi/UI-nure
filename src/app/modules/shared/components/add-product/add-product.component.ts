import { Component } from '@angular/core';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent {

  addProduct() {
    document.getElementById('product').classList.toggle('open');
  }

}
