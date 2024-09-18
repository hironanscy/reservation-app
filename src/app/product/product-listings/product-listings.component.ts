import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss'
})
export class ProductListComponent {

  constructor(private productService: ProductService){}

  // products: any = [1,2,3,4]
  products: any

  ngOnInit(){
    // this.products = this.productService.getProducts()

    const productObservable = this.productService.getProducts()
    productObservable.subscribe({
      next: (data) => {
        // console.log('got value ' + data);
        this.products = data;
       },
      error: (error) => { 'something wrong occurred: ' + error },
      complete: () => { },
    })

  }
}
