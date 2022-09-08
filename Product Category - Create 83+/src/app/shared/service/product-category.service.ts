import { Injectable } from '@angular/core';
import { ProductCategory } from '../models/productCategory';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  productCategory: ProductCategory[] = [];

  //Fill your code here
  getProductCategories(): ProductCategory[] {
    return this.productCategory;
  }
}
