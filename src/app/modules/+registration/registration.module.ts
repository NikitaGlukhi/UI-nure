import { NgModule } from '@angular/core';
import { RegisterComponent } from './registration/register.component';
import { RegistrationRoutingModule } from './registration.routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ RegisterComponent ],
  imports: [ RegistrationRoutingModule ],
  providers: []
})

export class RegistrationModule {  }
