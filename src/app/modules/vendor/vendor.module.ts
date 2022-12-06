import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { VendorRoutingModule } from './vendor-routing.module';
import { ActiveVendorComponent } from './active-vendor/active-vendor.component';
import { VendorComponent } from './vendor.component';
import { BlockVendorComponent } from './block-vendor/block-vendor.component';

@NgModule({
  declarations: [
    ActiveVendorComponent,
    VendorComponent,
    BlockVendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule
  ]
})
export class VendorModule { }
