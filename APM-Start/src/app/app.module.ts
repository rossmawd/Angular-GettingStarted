import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

// the Angular cli automatically imports this stuff for you
import { WelcomeComponent } from "./home/welcome.component";
import { RouterModule } from "@angular/router";
import { ImagesComponent } from "./ross/images/images.component";
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    RouterModule.forRoot([
  
      { path: "welcome", component: WelcomeComponent },
      { path: "images", component: ImagesComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
