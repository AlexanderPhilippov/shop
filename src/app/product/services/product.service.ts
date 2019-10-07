import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getProduct(id?: number): ProductModel {
    return new ProductModel(
      id || Math.floor(Math.random() * 100)
      , 'Test product'
      , 'This is a test product'
      , 2.5
      , '/assets/img/Muscle-Car-Chevrolet-Camaro-SS-icon.png'
      , true
      );
  }
}
