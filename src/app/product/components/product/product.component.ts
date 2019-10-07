import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: ProductModel;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.product = new ProductModel(1, 'Test product', 'This is a test product', 2.5, 'http://icons.iconarchive.com/icons/calebamesbury/classic-american-cars/256/Muscle-Car-Chevrolet-Camaro-SS-icon.png', true);
  }

}
