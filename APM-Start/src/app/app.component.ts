import { Component } from '@angular/core';



@Component({
  selector: 'pm-root',
  //this template using styling classes from twitter's bootstap styling framework
  template:`
 
<nav class="navbar navbar-expand navbar-light bg-light">
<a class="navbar brand">{{pageTitle}}</a>
<ul class="nav nav-pills">
    <li><a class="nav-link">Home</a></li>
    <li><a class="nav-link">Product List</a></li>
</ul>
</nav>`
})

export class AppComponent {
  pageTitle: string = 'Items For Sale';

}