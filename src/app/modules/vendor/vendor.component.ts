import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/vendor.service';
import { Vendor } from 'src/app/vendor';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  sendBlockVendor(vendor:Vendor){
    this.service.blocked.push(vendor);
  }
  
  constructor(private service :VendorService) {}
    Active: Vendor[]=this.service.getList();
    blockedVendors:Vendor[]=this.service.blocked;
   

  ngOnInit(): void {
  }

}
