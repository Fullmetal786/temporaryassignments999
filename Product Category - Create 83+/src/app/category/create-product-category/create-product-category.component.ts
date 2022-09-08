import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductCategoryService } from 'src/app/shared/service/product-category.service';

@Component({
  selector: 'app-create-productCategory',
  templateUrl: './create-product-category.component.html',
  styleUrls: ['./create-product-category.component.css']
})
export class CreateProductCategoryComponent implements OnInit {
  submitted: boolean = false;
  constructor(public router: Router, public productService: ProductCategoryService) {}
  //Fill your code here
  createProductCategory = new FormGroup({
    category: new FormControl('', Validators.required),
    imageURL: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    isVisible: new FormControl(false)
  });

  ngOnInit(): void {}

  get f() {
    return this.createProductCategory.controls;
  }

  onCancel() {
    this.createProductCategory.reset();
  }

  onSubmit() {
    console.log('values', this.createProductCategory.value);
    if (this.createProductCategory.valid) {
      let productData = {
        category: this.createProductCategory.value.category,
        imageURL: this.createProductCategory.value.imageURL,
        id: Math.floor(Math.random() * 100),
        description: this.createProductCategory.value.description,
        isVisible: this.createProductCategory.value.isVisible
      };
      this.productService.productCategory.push(productData);
      this.submitted = true;
      this.router.navigate(['productCategory/show']);
    }
  }
}
