import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
 
BrowserModule,
  FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// add products folder
//create product-list.component.html
//copy HTML from APM final



