import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

// import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  
  products;

constructor(private cartService: CartService){

}

ngOnInit(){
   this.products = this.cartService.getProducts();
   // window.alert(this.products);
}


share() {
    window.alert('The product has been shared!');
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/