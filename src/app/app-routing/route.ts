import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from '../welcome/welcome.component';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductDetailComponent} from '../product-detail/product-detail.component';

// tslint:disable-next-line:typedef-whitespace
export const routes : Routes = [
    {
        path: 'products',
        component: ProductListComponent
    }, {
        path: 'products/:id',
        component: ProductDetailComponent
    }, {
        path: 'welcome',
        component: WelcomeComponent
    }, {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    }, {
        path: '**',
        component: WelcomeComponent
    }
];
