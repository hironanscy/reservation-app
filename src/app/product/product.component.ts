import { Component } from '@angular/core';
import { ProductListComponent } from './product-listings/product-listings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterOutlet, Routes } from '@angular/router';
import { ProductService } from './shared/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, ProductDetailComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [ProductService]
})
export class ProductComponent {
  title='app-product'
};

export const productRoutes: Routes = [
  { path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent},
      { path: ':productId', component: ProductDetailComponent},
    ]
  }
];