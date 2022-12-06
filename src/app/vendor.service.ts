import { Injectable } from '@angular/core';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  vendors:Vendor[]=[
    {name:"veena",age:21,city:"Bangalore"},
    {name:"Teena",age:22,city:"Mangalore"}
  ]

  getList(){
    return this.vendors;
  }
  blocked:Vendor[]=[];
  constructor() { }
}
