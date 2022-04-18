import { IProduct } from './../products.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product?: IProduct;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // const id = parseInt(this.route.snapshot.params['id']);
    // this.product = this.productsService.getProduct(id);

    // this.route.params.subscribe((params: Params) => {
    //     this.product = this.productsService.getProduct(+params['id']);
    // })

    this.route.data.subscribe(
      (data: Data) => this.product = data['product']
    );
  }

  onEdit(): void {
    this.router.navigate(['editar'], { relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
