import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule, homeroutes } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule.forChild(homeroutes)
  ],

  exports: [
    CommonModule,
    HomeRoutingModule

  ]

})
export class HomeModule { }
