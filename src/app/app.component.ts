import { Component } from '@angular/core';
import { ProductsService } from './products.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  products$;
  constructor(private productsService: ProductsService){}

  fetchProducts() {
    this.productsService.fetchProducts().subscribe(data => this.products$=data["products"]);
  }
}
