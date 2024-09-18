import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product:any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe(
      params => {
        // this.product = products[+params.get('productId')!]
        // this.product = this.productService.getProductById(params.get('productId')!)
        const productObservable = this.productService.getProductById(params.get('productId')!)
        productObservable.subscribe({
          next: (data) => {
            this.product = data;
           },
          error: (error) => { 'something wrong occurred: ' + error },
          complete: () => { },
        })
      }
    )
  }

}
