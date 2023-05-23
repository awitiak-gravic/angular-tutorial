import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShippingComponent } from './shipping.component';

const routes: Routes = [{ path: '', component: ShippingComponent }];

@NgModule({
  declarations: [ShippingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ShippingModule {}
