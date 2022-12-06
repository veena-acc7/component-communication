import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vendor } from 'src/app/vendor';
import { VendorService } from 'src/app/vendor.service';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {
  @Input() details?: Vendor[];
  @Output() vendors= new EventEmitter();

  onClick(vendor:Vendor){
    this.vendors.emit(vendor);
    const i=this.service.vendors.indexOf(vendor);
    this.service.vendors.splice(i, 1);
  }
  
  
  constructor(private service:VendorService ) { }

  ngOnInit(): void {
  }

}
