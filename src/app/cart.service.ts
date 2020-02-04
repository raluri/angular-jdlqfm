import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';

@Injectable({
   providedIn: 'root'
})
export class CartService {

items = []; 

constructor(
  private http: HttpClient,
  private logger: LoggerService
) { }

addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

   getProducts() {
    return this.http.get('/assets/products.json');
  }

  getShippingPrices() {
    this.logger.log('Getting ShippingServices ...');
    return this.http.get('/assets/shipping.json');
  }

}