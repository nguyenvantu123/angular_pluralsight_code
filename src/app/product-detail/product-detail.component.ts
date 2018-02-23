import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product/product-service.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  errorMessage: String;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private route: Router) {}

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params['id'];
  if (id) {
  // tslint:disable-next-line:no-trailing-whitespace
    this.getProduct(id);
    }
  }
  getProduct(id: number) {
  this
  .productService
  .getProducts(id)
  .subscribe(product => this.product = product, err => this.errorMessage = err);
  }
  onBack(): void {
this
  .route
  .navigate(['./products']) ;
}
}
