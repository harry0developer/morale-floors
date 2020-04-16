import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

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
  category = [
    { name: 'Adhesive & Grounds', category: 'adhesive', },
    {
      name: 'Accessories', category: 'accessories', products: [
        {
          name: 'Product1',
          img: 'product1',
          description: 'Quick-hardening cementitious levelling compound for internal and external surfaces.',
          size: '20kg',
          category: 'tiles'
        },
        {
          name: 'Product2',
          img: 'product1',
          description: 'Quick-hardening cementitious levelling compound for internal and external surfaces.',
          size: '20kg',
          category: 'tiles'
        },
      ]
    },
    { name: 'Laminates', category: 'laminates', },
    { name: 'Mosaic', category: 'mosaic', },
    { name: 'Tiles', category: 'tiles', },
    { name: 'Vynil', category: 'vynil', }
  ];

  adhesive = [
    {
      name: 'Mapei Adesilex p4',
      img: 'product1',
      description: 'Quick-hardening cementitious levelling compound for internal and external surfaces.',
      size: '20kg',
      category: 'adhesives'
    },
    {
      name: 'Mapei Adesilex p9 Express',
      img: 'product2',
      description: 'High performance, fast setting cementitious adhesive with no vertical slip for porcelain tiles and stone materials.',
      size: '20kg',
      category: 'adhesives'
    },
    {
      name: 'Mapei Kerabond T-R',
      img: 'product3',
      description: 'Non-slip cementitious adhesive for porcelain and ceramic tiles',
      size: '20kg',
      category: 'adhesives'
    },
    {
      name: 'Mapei kerabond R',
      img: 'product4',
      description: 'Cementious adhesive for ceramic tiles and absorbent porcelain tiles',
      size: '20kg',
      category: 'adhesives'
    },
    {
      name: 'Mapegrout T60',
      img: 'product5',
      description: 'Sulphate-resistant thixotropic fibre-reinforced mortar for the repair of concrete.',
      size: '25kg',
      category: 'adhesives'
    },
    {
      name: 'MAPEI Adesilex PG4',
      img: 'product6',
      description: 'Two-component, thixotropic, epoxy adhesive with modified-rheology for bonding Mapeband, Mapeband TPE, PVC braces, Hypalon and for structural bonding.',
      size: '4.5kg',
      category: 'adhesives'
    },
    {
      name: 'Tile Magic Superior',
      img: 'product7',
      description: 'A pre-mixed precise blend of hydraulic cements, shrinkage compensation chemicals and fillers. The product is formulated to grout both wall and floor tiles. It inhibits moisture ingress, bacterial and fungal growth.',
      size: '20kg',
      category: 'adhesives'
    },
    {
      name: 'Tile Magic Tile Grout',
      img: 'product8',
      description: 'A pre-mixed precise blend of hydraulic cements, shrinkage compensation chemicals and fillers. The product is formulated to grout both wall and floor tiles',
      size: '20kg',
      category: 'adhesives'
    },

  ];

  vynil = [
    {
      name: '603 Bright White',
      img: 'product1',
      description: '603 Bright White-300x300mm-2.00mm and 2.5mm thickness',
      size: 'R169/m2',
      category: 'vynil'
    },
    {
      name: '610 White',
      img: 'product2',
      description: '610 White-300x300mm-2.00mm and 2.5mm thickness',
      size: 'R169/m2',
      category: 'vynil'
    },
    {
      name: '612 Stormy Grey',
      img: 'product3',
      description: '612 Stormy Grey-300x300mm-2.00mm and 2.5mm thickness',
      size: 'R169/m2',
      category: 'vynil'
    },
    {
      name: '612 Stormy Grey',
      img: 'product3',
      description: '612 Stormy Grey-300x300mm-2.00mm and 2.5mm thickness',
      size: 'R169/m2',
      category: 'vynil'
    },
    {
      name: '615 Pewter',
      img: 'product4',
      description: '615 Pewter-300x300mm-2.00mm and 2.5mm thickness',
      size: 'R169/m2',
      category: 'vynil'
    },
    {
      name: '628 Signal Red',
      img: 'product5',
      description: '628 Signal Red-300x300mm-2.00mm and 2.5mm thickness',
      size: 'R169/m2',
      category: 'vynil'
    },
    {
      name: '657 Rosemary',
      img: 'product6',
      description: '657 Rosemary-300x300mm-2.00mm and 2.5mm thickness',
      size: 'R169/m2',
      category: 'vynil'
    },
    {
      name: '676 Ocean Blue',
      img: 'product7',
      description: '676 Ocean Blue-300x300mm-2.00mm and 2.5mm thickness',
      size: 'R169/m2',
      category: 'vynil'
    },
    {
      name: '682 Sandal',
      img: 'product8',
      description: '682 Sandal-300x300mm-2.00mm and 2.5mm thickness',
      size: 'R169/m2',
      category: 'vynil'
    },
    {
      name: '686 Camel',
      img: 'product9',
      description: '686 Camel-300x300mm-2.00mm and 2.5mm thickness',
      size: 'R169/m2',
      category: 'vynil'
    }
  ];

  laminates = [
    {
      name: 'COUNTRY WALNUT',
      img: 'product1',
      description: 'COUNTRY WALNUT R169.95 per tile  specification- ac4, class 32 dimensions- 1216 x 197 x 8.3 mm per box- 10 boards - 2.395 m² colour- white material- laminated wooden flooring-R 189 m2',
      size: ' R169.95/tile',
      category: 'laminates'
    },
    {
      name: 'Caramel Aged Dm',
      img: 'product2',
      description: 'Caramel Aged-Dm 968-Series 430 deZign Floor',
      size: 'R189/m2',
      category: 'laminates'
    },
    {
      name: 'WHITE WASH',
      img: 'product3',
      description: 'WHITE WASH R169.95 per tile  specification- ac4, class 32 dimensions- 1216 x 197 x 8.3 mm per box- 10 boards - 2.395 m² colour- white material- laminated wooden flooring',
      size: 'R169.95/tile',
      category: 'laminates'
    },
    {
      name: 'Oak Glacier Dm',
      img: 'product4',
      description: 'Oak Glacier-Dm 209-Series 430 deZign Floor',
      size: 'R189/m2',
      category: 'laminates'
    },
    {
      name: 'Sand Oak White Dm',
      img: 'product5',
      description: 'Sand Oak White-Dm 509-Series 430 deZign',
      size: 'R189/m2',
      category: 'laminates'
    },
    {
      name: 'Timeless Oak Dm',
      img: 'product6',
      description: 'Timeless Oak-Dm 210-Series 430 deZign Floor',
      size: 'R189/m2',
      category: 'laminates'
    },
  ];

  tiles = [
    {
      name: 'Amatuli Sepia Matt',
      img: 'product1',
      description: '250mmx500mm',
      price: 'R119',
      category: 'tiles'
    },
    {
      name: 'BARN Ash Matt',
      img: 'product2',
      description: '250mmx500mm',
      price: 'R119',
      category: 'tiles'
    },
    {
      name: 'BARN Almond Matt',
      img: 'product3',
      description: '250mmx500mm',
      price: 'R119',
      category: 'tiles'
    },
    {
      name: 'BARN VANILLA Matt',
      img: 'product4',
      description: '250mmx500mm',
      price: 'R119',
      category: 'tiles'
    },
    {
      name: 'Crate Brown Matt',
      img: 'product5',
      description: '500mmx250mm',
      price: 'R119',
      category: 'tiles'
    },
    // {
    //   name: 'Crate Brown F2 Matt',
    //   img: 'product6',
    //   description: '500mmx250mm',
    //   price: 'R119',
    //   category: 'tiles'
    // },
    {
      name: 'Crate Scuffed Matt',
      img: 'product7',
      description: '500mmx250mm',
      price: 'R119',
      category: 'tiles'
    },
    {
      name: 'CONGO BEIGE Matt',
      img: 'product8',
      description: '400mmx400mm',
      price: 'R112',
      category: 'tiles'
    },
    {
      name: 'CONGO GREY Matt',
      img: 'product9',
      description: '400mmx400mm',
      price: 'R112',
      category: 'tiles'
    },
    {
      name: 'CYPRESS CREMA WOODWASH Matt',
      img: 'product10',
      description: '600mmx600mm',
      price: 'R119',
      category: 'tiles'
    },

  ];

  mosaic = [
    {
      name: 'Ashanti Grey Mosaic',
      img: 'product1',
      description: '300x300mm',
      price: 'R60',
      category: 'mosaic'
    },
    {
      name: 'Khetho Silver Mosaic',
      img: 'product2',
      description: '300x300mm',
      price: 'R99',
      category: 'mosaic'
    },
    {
      name: 'Khetho Silver Mosaic',
      img: 'product2',
      description: '300x300mm',
      price: 'R80',
      category: 'mosaic'
    }

  ];

  accessories = [
    {
      name: 'Dual Squeegee',
      img: 'product1',
      description: '300x300',
      size: '',
      category: 'accessories'
    },
    {
      name: 'Grout Spreader',
      img: 'product2',
      description: '300x300',
      size: '',
      category: 'accessories'
    },
    {
      name: 'Heavy Duty Grout Remover',
      img: 'product3',
      description: '300x300',
      size: '',
      category: 'accessories'
    },
    {
      name: 'Steel Wall Trowel',
      img: 'product4',
      description: '300x300',
      size: '',
      category: 'accessories'
    },
    {
      name: 'Tile Cleaning Sponge',
      img: 'product5',
      description: '300x300',
      size: '',
      category: 'accessories'
    },
    {
      name: 'Tile Cutter',
      img: 'product6',
      description: '300x300',
      size: '',
      category: 'accessories'
    },
    {
      name: 'Tile Cutter Breakers',
      img: 'product7',
      description: '300x300',
      size: '',
      category: 'accessories'
    },
    {
      name: 'Tile Edge Trims',
      img: 'product8',
      description: '300x300',
      size: '',
      category: 'accessories'
    },
    {
      name: 'Tile Nippers',
      img: 'product9',
      description: '300x300',
      size: '',
      category: 'accessories'
    },
    {
      name: 'Tile Spacers',
      img: 'product10',
      description: '300x300',
      size: '',
      category: 'accessories'
    },
  ];

  activeCategory = this.category[0];

  products: any = this.adhesive;
  open = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  activateProduct(product: string) {
    if (product.toLowerCase() === 'adhesive') {
      this.activeCategory = this.category[0];
      this.products = this.adhesive;
    } else if (product.toLowerCase() === 'accessories') {
      this.activeCategory = this.category[1];
      this.products = this.accessories;
    } else if (product.toLowerCase() === 'laminates') {
      this.activeCategory = this.category[2];
      this.products = this.laminates;
    } else if (product.toLowerCase() === 'mosaic') {
      this.activeCategory = this.category[3];
      this.products = this.mosaic;
    } else if (product.toLowerCase() === 'tiles') {
      this.activeCategory = this.category[4];
      this.products = this.tiles;
    } else if (product.toLowerCase() === 'vynil') {
      this.activeCategory = this.category[5];
      this.products = this.vynil;
    }
    this.scrollToTop();
  }

  isActive(category: string): boolean {
    return this.activeCategory.category === category;
  }

  scrollToTop() {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

}
