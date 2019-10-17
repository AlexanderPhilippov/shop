import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product: ProductModel;

  @Output()
  addProductToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor(private productService: ProductService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/add_shopping_cart-24px.svg'));
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

  onAddProductToCartAction(): void {
    console.log('Product with id: ' + this.product.id + ' added to cart');
    this.addProductToCart.emit(this.product);
  }

}
