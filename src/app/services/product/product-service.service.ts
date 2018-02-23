import {Injectable} from '@angular/core';
import {IProduct} from '../../shared/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import {HttpResponse} from 'selenium-webdriver/http';
import {HttpErrorResponse} from '@angular/common/http/src/response';
@Injectable()
export class ProductService {
private _productUrl = './assets/products/products.json';
  getProduct(): Observable < IProduct[] > {
return this._http.get< IProduct[] > (this._productUrl).do(data => console.log('All: ' + JSON.stringify(data))).catch(this.handleError);
    }
  getProducts(id: Number): Observable < IProduct> {
  return this
  .getProduct()
  .map((product: IProduct[]) => product.find(p => p.productId === id));
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
  constructor(private _http: HttpClient) {}
}
