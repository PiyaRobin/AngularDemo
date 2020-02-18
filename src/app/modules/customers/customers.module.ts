import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerChildComponent } from './customer-child/customer-child.component';
import { ChildOneComponent } from './child-components/child-one/child-one.component';
import { ChildTwoComponent } from './child-components/child-two/child-two.component';


@NgModule({
  declarations: [CustomersComponent, CustomerChildComponent, ChildOneComponent, ChildTwoComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
