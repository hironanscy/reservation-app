import { Routes } from '@angular/router';
import { productRoutes } from './product/product.component';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    ...productRoutes
];
