import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./product-list/product-list.module').then(
            (m) => m.ProductListModule
          ),
      },
      {
        path: 'products/:productId',
        loadChildren: () =>
          import('./product-details/product-details.module').then(
            (m) => m.ProductDetailsModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'shipping',
        loadChildren: () =>
          import('./shipping/shipping.module').then((m) => m.ShippingModule),
      },
    ]),
  ],
  declarations: [AppComponent, TopBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
