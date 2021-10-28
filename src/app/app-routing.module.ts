import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ManageCustomersComponent} from "./manage-customers/manage-customers.component";
import {ManageItemsComponent} from "./manage-items/manage-items.component";
import {PlaceOrderComponent} from "./place-order/place-order.component";
import {SearchOrdersComponent} from "./search-orders/search-orders.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [

  /* http://localhost:4200/manage-customers */

  /* "http://local" + "" + "host:4200" => http://localhost:4200 */

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'manage-customers',
    component: ManageCustomersComponent
  },
  {
    path: 'manage-items',
    component: ManageItemsComponent
  },
  {
    path: 'place-order',
    component: PlaceOrderComponent
  },
  {
    path: 'search-orders',
    component: SearchOrdersComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
