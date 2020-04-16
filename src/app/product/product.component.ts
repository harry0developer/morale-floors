import { Component, Input, AfterContentInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements AfterContentInit {
  @Input() category;
  @Input() products;

  constructor() { }

  ngAfterContentInit() {
    if (this.category.category.toLowerCase() === 'adhesive') {
      // this.products = this.adhesive;
    } else if (this.category.category.toLowerCase() === 'mosaic') {
      // this.products = this.mosaic;
    } else if (this.category.category.toLowerCase() === 'vynil') {
      // this.products = this.vynil;
    } else if (this.category.category.toLowerCase() === 'tiles') {
      // this.products = this.tiles;
    } else if (this.category.category.toLowerCase() === 'accessories') {
      // this.products = this.accessories;
    } else if (this.category.category.toLowerCase() === 'laminates') {
      // this.products = this.laminates;
    }
  }

}
