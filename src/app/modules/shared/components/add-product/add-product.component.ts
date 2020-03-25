import { Component, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { AddProductModal } from '../../modals/add-product/add-product.modal';

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

  constructor(private readonly bsModalService: BsModalService) {}

  addProduct() {
    this.bsModalService.show(
      AddProductModal,
      {
        initialState: {
          price: this.price,
          name: this.name,
          count: this.count
        }
      })
  }

}
