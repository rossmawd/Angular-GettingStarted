import { Component } from '@angular/core';



@Component({
  selector: 'pm-root',
  //this template using styling classes from twitter's bootstap styling framework
  template:`
 
<nav class='navbar navbar-expand navbar-light bg-light'>
<a class='navbar-brand'>{{pageTitle}}</a>
<ul class='nav nav-pills'>
    <li><a class='nav-link' [routerLink] = "['/welcome']">Home</a></li>
    <li><a class='nav-link' [routerLink] = "['/products']">Product List</a></li>
    <li><a class='nav-link' [routerLink] = "['/images']">WestWorld</a></li>
</ul>
</nav>
<div class='container'>
<!-- whatever is routed to displays here: -->
<router-outlet></router-outlet>
</div>
`
})

export class AppComponent {
  pageTitle: string = 'Items For Sale';

}