import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CreateComponent } from './create/create.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
  //   { path: '/home', component: AppComponent },
  { path: 'product', component: ProductComponent },
  { path: 'create', component: CreateComponent },
];
