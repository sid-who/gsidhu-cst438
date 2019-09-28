import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //homepage
import { SignInComponent } from './sign-in/sign-in.component'; //sign in page
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailsComponent } from './details/details.component';
import { OrderedComponent } from './ordered/ordered.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'ordered', component: OrderedComponent},
  { path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
