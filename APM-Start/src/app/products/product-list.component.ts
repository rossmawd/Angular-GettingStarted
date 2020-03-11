import {Component, OnInit} from '@angular/core';
import {IProduct} from './product'

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Amazon' ;
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[]; //declaring a new array for the filtered products
 // listFilter: string = 'cart';
 _listFilter: string;

 get listFilter(): string {
   return this._listFilter
 }

 set listFilter(inputValue: string) {
   this._listFilter = inputValue;
   //if listFilter is undefined or '', don't filter. Else, execute performFilter
   this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
   
 } 


  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2019",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2019",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2018",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png"
    }
    
  ];

   //filterBy is what the user has typed, the return value is a new products array
 performFilter(filterBy: string) : IProduct[] {
   console.log('filtering...')
  //use toLocaleLowerCase() to lowercase filterBy
  //use filter to return a new array of products
  //by using indexOf to return the index of a matching sub-string: indexOf('what')
  filterBy = filterBy.toLocaleLowerCase()
  return this.products.filter( product =>
   product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
   //indexOf returns -1 if it cannot find the substring 'filterBy'
  
}

constructor(){
  this.filteredProducts =this.products
  this.listFilter = 'cart'
}
  ngOnInit(): void {
    console.log('In ONInit');
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  
}