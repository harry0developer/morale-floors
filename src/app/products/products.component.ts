import { Component, OnInit } from '@angular/core';


export interface Product {
  name: string;
  img: string;
  description: string;
  price: string;
  category: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  category = ['adhesive', 'mosaic', 'vynil', 'tile', 'accessories'];
  activeCategory: string = this.category[0];
  constructor() { }

  ngOnInit(): void {
  }

  activateProduct(product: string) {
    this.activeCategory = product;
  }

}
