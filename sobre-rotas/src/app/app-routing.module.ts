import { ProductResolveService } from './products/product/product-resolve.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CanDeactivateGuardService } from './products/edit-product/can-deactivate-guard.service';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditProductComponent } from "./products/edit-product/edit-product.component";
import { ProductComponent } from "./products/product/product.component";
import { ProductsComponent } from "./products/products.component";
import { SupplierComponent } from "./suppliers/supplier/supplier.component";
import { SuppliersComponent } from "./suppliers/suppliers.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos',
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ProductsComponent,
    children: [
      { path: ':id', component: ProductComponent, resolve: { product: ProductResolveService } },
      { path: ':id/editar', component: EditProductComponent, canDeactivate: [CanDeactivateGuardService] },
    ]
  },
  { path: 'fornecedores', component: SuppliersComponent, children: [
    { path: ':id/:name', component: SupplierComponent },
  ] },
  // { path: 'pagina-nao-encontrada', component: PageNotFoundComponent },
  { path: 'pagina-nao-encontrada', component: ErrorPageComponent, data: {
    message: 'Página não encontrada!'
  } },
  { path: '**', redirectTo: '/pagina-nao-encontrada' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
