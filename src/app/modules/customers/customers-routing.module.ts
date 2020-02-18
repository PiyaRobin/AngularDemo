import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomerChildComponent } from './customer-child/customer-child.component';
import { ChildOneComponent } from './child-components/child-one/child-one.component';
import { ChildTwoComponent } from './child-components/child-two/child-two.component';
import { RouteGuardService } from 'src/app/guards/route-guard.service';

const routes: Routes = [
  { path: '', component: CustomersComponent, canActivate: [RouteGuardService], canActivateChild: [RouteGuardService],
  children: [
    { path: 'child1', component: ChildOneComponent },
    { path: 'child2', component: ChildTwoComponent }
  ] }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
