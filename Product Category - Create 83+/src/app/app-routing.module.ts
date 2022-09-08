import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductCategoryComponent } from './category/create-product-category/create-product-category.component';
import { ViewProductCategoryComponent } from './category/view-product-category/view-product-category.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'productCategory/create', component: CreateProductCategoryComponent },
  { path: 'productCategory/show', component: ViewProductCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
