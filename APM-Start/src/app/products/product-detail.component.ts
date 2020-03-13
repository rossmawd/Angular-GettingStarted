import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Router} from '@angular/router'


@Component({
  // selector: 'pm-product-detail', NOT required as we'll be routing to this 
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail'
  product: IProduct;

  //each paramater has given us an instance of a service (Router, &ActivRoute)
  constructor(private route: ActivatedRoute, private router: Router) {} 

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')
    this.pageTitle += `:${id}`;
    this.product = {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    }
  }

// like the routerLink directive, navigate can have a second element in the array
//that adds a paramater onto the url
  onBack(): void {
    this.router.navigate(['/products'])
  }

}

