import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  // selector: "pm-products", //using Routing instead
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit {
  pageTitle: string = "Amazon";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[]; //declaring a new array for the filtered products
  // listFilter: string = 'cart';
  _listFilter: string;
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(inputValue: string) {
    this._listFilter = inputValue;
    //if listFilter is undefined or '', don't filter. Else, execute performFilter
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  products: IProduct[] = [];

  //filterBy is what the user has typed, the return value is a new products array
  performFilter(filterBy: string): IProduct[] {
    console.log("filtering...");
    //use toLocaleLowerCase() to lowercase filterBy
    //use filter to return a new array of products
    //by using indexOf to return the index of a matching sub-string: indexOf('what')
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      product =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
    //indexOf returns -1 if it cannot find the substring 'filterBy'
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }

  //could be 'public' or 'protected' as well
  constructor(private productService: ProductService) {}

  //The place to make any API calls
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products  
        this.filteredProducts = this.products; //if outside this products are empty when this line is exec
      
      },
      error: err => this.errorMessage = err
    });
  
    console.log("In ONInit");
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
