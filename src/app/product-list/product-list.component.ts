import {Component, OnInit} from '@angular/core';
import {IProduct} from '../shared/product';
import { StarComponent } from '../shared/star/star.component';
import { ProductService } from '../services/product/product-service.service';
import { Observable } from 'rxjs/Observable';
import { error } from 'util';
@Component({selector: 'app-product-list', templateUrl: './product-list.component.html', styleUrls: ['./product-list.component.scss']})
export class ProductListComponent implements OnInit {
  pageTitle: String = 'Product List';
  width: Number = 50;
  margin: Number = 2;
  showImage: Boolean = false;
  _listFilter: string;
  filteredProduct: IProduct[];
  products: IProduct[];
  errorMessage: String;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string){
     this._listFilter = value;
    this.filteredProduct = this.filteredProduct
      ? this.performFilter(this._listFilter)
      : this.products;
  }
  performFilter(lstFilter: string): IProduct[] {
    lstFilter = lstFilter.toLowerCase();
    return this
      .products
      .filter((products: IProduct) => products.productName.toLowerCase().indexOf(lstFilter) !== -1);
  }
  toogleImage(): void {
    this.showImage = !this.showImage;
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List:' + message;
}
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
this
  .productService
  .getProduct()
  .subscribe(products => {
    this.products = products,
    this.filteredProduct = this.products;
  }, err => this.errorMessage = err);
  }
}
