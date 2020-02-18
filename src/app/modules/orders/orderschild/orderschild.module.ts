import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderschildRoutingModule } from './orderschild-routing.module';
import { OrderschildComponent } from './orderschild.component';


@NgModule({
  declarations: [OrderschildComponent],
  imports: [
    CommonModule,
    OrderschildRoutingModule
  ]
})
export class OrderschildModule { }
