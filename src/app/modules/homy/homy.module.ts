import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomyRoutingModule } from './homy-routing.module';
import { HomyComponent } from './homy.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomyComponent],
  imports: [
    CommonModule,
    HomyRoutingModule, FormsModule
  ]
})
export class HomyModule { }
