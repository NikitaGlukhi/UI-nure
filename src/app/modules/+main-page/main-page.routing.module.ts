import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';

export const mainPagesRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(mainPagesRoutes) ],
  exports: [ RouterModule ]
})

export class MainPageRoutingModule {  }
