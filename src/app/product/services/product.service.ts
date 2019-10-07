import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getProduct(id?: number): ProductModel {
    return new ProductModel(
      Math.floor(Math.random() * 100)
      , 'Test product'
      , 'This is a test product'
      , 2.5
      , 'http://icons.iconarchive.com/icons/calebamesbury/classic-american-cars/256/Muscle-Car-Chevrolet-Camaro-SS-icon.png'
      , true
      );
  }
}
