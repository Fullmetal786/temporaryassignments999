import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/shared/models/productCategory';
import { ProductCategoryService } from 'src/app/shared/service/product-category.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product-category.component.html',
  styleUrls: ['./view-product-category.component.css']
})
export class ViewProductCategoryComponent implements OnInit {
  productCategory: ProductCategory[];
  constructor(private service: ProductCategoryService, private router: Router) {}

  ngOnInit() {
    //Fill your code here
    this.productCategory = this.service.getProductCategories();

    if (this.service.productCategory.length === 0) {
      this.router.navigate(['']);
    }
  }
}
