import { NgModule } from '@angular/core';

import { MainPageComponent } from './main-page/main-page.component';
import { MainPageRoutingModule } from './main-page.routing.module';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from '../shared/components/add-product/add-product.component';

@NgModule({
  declarations: [ MainPageComponent, AddProductComponent ],
  imports: [ MainPageRoutingModule, CommonModule ],
  providers: []
})

export class MainPageModule {  }
