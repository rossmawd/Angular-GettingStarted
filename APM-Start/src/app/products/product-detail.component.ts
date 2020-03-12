import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  // selector: 'pm-product-detail', NOT required as we'll be routing to this 
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail'
  product: IProduct[];

  constructor() { }

  ngOnInit() {
  }

}
