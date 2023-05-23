import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';

const routes: Routes = [{ path: '', component: ProductListComponent }];

@NgModule({
  declarations: [ProductListComponent, ProductAlertsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductListModule {}
