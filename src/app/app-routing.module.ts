import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ManageCustomersComponent} from "./manage-customers/manage-customers.component";
import {ManageItemsComponent} from "./manage-items/manage-items.component";
import {PlaceOrderComponent} from "./place-order/place-order.component";
import {SearchOrdersComponent} from "./search-orders/search-orders.component";

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
