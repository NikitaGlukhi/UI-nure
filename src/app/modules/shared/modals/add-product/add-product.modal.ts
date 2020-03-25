import { Component, EventEmitter, OnDestroy } from '@angular/core';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'add-product-modal',
  templateUrl: './add-product.modal.html',
  styleUrls: ['./add-product.modal.scss']
})

export class AddProductModal implements OnDestroy {
  productPrice: number;
  productName: string;
  productCount: string;
  wantToBuy: number = 0;
  readonly cancel = new EventEmitter();

  constructor(private readonly bsModalRef: BsModalRef, private readonly modalOptions: ModalOptions) {
    console.log(this.modalOptions.initialState);
    this.productPrice = this.modalOptions.initialState.price;
    this.productName = this.modalOptions.initialState.name;
    this.productCount = this.modalOptions.initialState.count;
  }

  cancelAction(): void {
    this.bsModalRef.hide();
    this.cancel.emit();
  }

  ngOnDestroy(): void {
    this.bsModalRef.hide();
    this.cancel.complete();
  }
}
