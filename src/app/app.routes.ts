import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CreateComponent } from './create/create.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateComponent } from './update/update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TablelistadminComponent } from './tablelistadmin/tablelistadmin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ListProductComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'list', component: TablelistadminComponent },
      { path: 'create', component: CreateComponent },
      { path: 'list/update/:id', component: UpdateComponent },
    ],
  },
];
