import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  { path: '', redirectTo: 'homy', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },

  { path: 'customers', loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule) },

  { path: 'orders', loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule) },

  { path: 'homes', loadChildren: () => import('./homes/homes.module').then(m => m.HomesModule) },

  { path: 'homy', loadChildren: () => import('./modules/homy/homy.module').then(m => m.HomyModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
