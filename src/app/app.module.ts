import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacePipePipe} from './shared/convert-to-space-pipe.pipe';
import {StarComponent} from './shared/star/star.component';
import {ProductService} from './services/product/product-service.service';
import {HttpClientModule} from '@angular/common/http';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {RouterModule} from '@angular/router';
import { routes } from '../app/app-routing/route';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipePipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpClientModule,
  RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}