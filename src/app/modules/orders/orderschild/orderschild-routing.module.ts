import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderschildComponent } from './orderschild.component';

const routes: Routes = [{ path: '', component: OrderschildComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderschildRoutingModule { }
