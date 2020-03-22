import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './registration/register.component';

export const registerRoutes: Routes = [{
  path: '',
  component: RegisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(registerRoutes)],
  exports: [RouterModule]
})

export class RegistrationRoutingModule {  }
