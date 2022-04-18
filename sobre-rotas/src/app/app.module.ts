import { ProductResolveService } from './products/product/product-resolve.service';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductsService } from './products/products.service';
import { ProductComponent } from './products/product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './products/edit-product/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuppliersComponent,
    SupplierComponent,
    ProductsComponent,
    ProductComponent,
    EditProductComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService,
    AuthService,
    AuthGuardService,
    CanDeactivateGuardService,
    ProductResolveService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
