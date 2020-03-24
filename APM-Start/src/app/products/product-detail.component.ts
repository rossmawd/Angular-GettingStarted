import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { StarComponent } from "../shared/star.component";

@Component({
  // selector: 'pm-product-detail', NOT required as we'll be routing to this
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  selectedProduct: IProduct;
  products: IProduct[] = [];
  imageWidth: number = 50;
  imageMargin: number = 2;

  //each paramater has given us an instance of a service (Router, &ActivRoute)
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.pageTitle += `:${id}`;
    console.log('the current product id is', id)
    
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.selectedProduct = this.products.filter(product => product.productId === id)[0]
      }   
    });

    console.log('the current product is', this.selectedProduct)
  }

  // like the routerLink directive, navigate can have a second element in the array
  //that adds a paramater onto the url
  onBack(): void {
    this.router.navigate(["/products"]);
  }
}
