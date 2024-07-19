import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductUpdateComponent } from './product-update/product-update.component';


@NgModule({
    imports: [
        CommonModule,
        SellerRoutingModule,
        ReactiveFormsModule,
        ProductsComponent,
        ProductAddComponent,
        ProductUpdateComponent
    ]
})
export class SellerModule { }
