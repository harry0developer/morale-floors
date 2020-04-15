import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = [
    {
      name: 'Tile One',
      img: 'tile1.jpg',
      description: 'Amazing Tile One with great surface',
      price: 'R200',
      category: 'Vynil'
    },
    {
      name: 'Tile 2',
      img: 'tile2.jpg',
      description: 'Amazing Tile 2 with great surface',
      price: 'R1200',
      category: 'Vynil'
    },
    {
      name: 'Tile 3',
      img: 'tile2.jpg',
      description: 'Amazing Tile 3 with great surface',
      price: 'R2200',
      category: 'Vynil'
    },
    {
      name: 'Tile 4',
      img: 'tile2.jpg',
      description: 'Amazing Tile 4 with great surface',
      price: 'R2300',
      category: 'Vynil'
    },
    {
      name: 'Tile 5',
      img: 'tile2.jpg',
      description: 'Amazing Tile 5 with great surface',
      price: 'R4200',
      category: 'Vynil'
    }

  ];

  @Input() category;

  constructor() { }

  ngOnInit(): void {

    console.log(this.category);

  }

}
