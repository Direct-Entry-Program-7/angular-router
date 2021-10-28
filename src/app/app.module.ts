import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { SearchOrdersComponent } from './search-orders/search-orders.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    ManageCustomersComponent,
    ManageItemsComponent,
    PlaceOrderComponent,
    SearchOrdersComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
