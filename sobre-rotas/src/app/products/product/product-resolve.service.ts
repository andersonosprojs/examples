import { Injectable } from '@angular/core';
import { IProduct, ProductsService } from './../products.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable()
export class ProductResolveService implements Resolve<IProduct> {

  constructor(
    private productsService: ProductsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): IProduct | Observable<IProduct> | Promise<IProduct> {
    return this.productsService.getProduct(+route.params['id']);
  }
}
