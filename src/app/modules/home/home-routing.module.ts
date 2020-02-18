import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

export const homeroutes: Routes = [

  { path: 'home', component: HomeComponent,  pathMatch: 'full' }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(homeroutes)
  ],
  exports: [RouterModule, homeroutes]
})
export class HomeRoutingModule { }
