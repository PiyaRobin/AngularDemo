import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomyComponent } from './homy.component';

const routes: Routes = [{ path: '', component: HomyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomyRoutingModule { }
