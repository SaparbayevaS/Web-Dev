import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() category: string | number = ''; 

  products: { [key: string | number]: any[] } = {
    Apple: [
      {
        name: 'iPhone 11',
        description: '128GB, Slim Box,  Black',
        image: 'assets/1.1.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=273620100&sr=1&qid=ba461d1eb7fbe063d4519dc17142cd63&ref=shared_link',
        likes: 0
      },
      {
        name: 'iPhone 15 Pro Max',
        description: '256GB, Gray',
        image: 'assets/1.2.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=273620100&sr=3&qid=ba461d1eb7fbe063d4519dc17142cd63&ref=shared_link',
        likes: 0
      },
      {
        name: 'iPhone 13',
        description: '128GB, White',
        image: 'assets/1.3.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=273620100&sr=5&qid=ba461d1eb7fbe063d4519dc17142cd63&ref=shared_link',
        likes: 0
      },
      {
        name: 'iPhone 14 Pro Max',
        description: '256GB, Purple',
        image: 'assets/1.4.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=273620100&sr=12&qid=ba461d1eb7fbe063d4519dc17142cd63&ref=shared_link',
        likes: 0
      },
      {
        name: 'iPhone 14',
        description: '128GB, Pale Blue',
        image: 'assets/1.5.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=273620100&sr=19&qid=ba461d1eb7fbe063d4519dc17142cd63&ref=shared_link',
        likes: 0
      }
    ],
    Samsung: [
      {
        name: 'Samsung Galaxy A54',
        description: '5G 8GB/256GB, Black',
        image: 'assets/2.1.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-110044379/?c=273620100&sr=1&qid=79d7f3f24e43dc9cf66bcc7bf0b53316&ref=shared_link',
        likes: 0
      },
      {
        name: 'Samsung Galaxy A55',
        description: '5G 8GB/256GB, Dark Blue',
        image: 'assets/2.2.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=273620100&sr=3&qid=79d7f3f24e43dc9cf66bcc7bf0b53316&ref=shared_link',
        likes: 0
      },
      {
        name: 'Samsung Galaxy S23 Ultra',
        description: '12GB/256GB, Black',
        image: 'assets/2.3.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=273620100&sr=5&qid=79d7f3f24e43dc9cf66bcc7bf0b53316&ref=shared_link',
        likes: 0
      },
      {
        name: 'Samsung Galaxy A05s',
        description: '4GB/128GB, Purple',
        image: 'assets/2.4.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a05s-4-gb-128-gb-fioletovyi-114693084/?c=273620100&sr=14&qid=79d7f3f24e43dc9cf66bcc7bf0b53316&ref=shared_link',
        likes: 0
      },
      {
        name: 'Samsung Galaxy S24 Ultra',
        description: '5G 12GB/246GB, Gray',
        image: 'assets/2.5.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=273620100&sr=17&qid=79d7f3f24e43dc9cf66bcc7bf0b53316&ref=shared_link',
        likes: 0
      }
    ],
    Xiaomi: [
      {
        name: 'Xiaomi Redmi 9A',
        description: '2GB/32GB, Green',
        image: 'assets/3.1.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/redmi-9a-2-gb-32-gb-zelenyi-100436948/?c=273620100&sr=5&qid=63e362ba63bbe682adf5ec1a97d01c0f&ref=shared_link',
        likes: 0
      },
      {
        name: 'Xiaomi Redmi 9C',
        description: '3GB/64GB, Gray',
        image: 'assets/3.2.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-9c-3-gb-64-gb-seryi-100500084/?c=273620100&sr=3&qid=63e362ba63bbe682adf5ec1a97d01c0f&ref=shared_link',
        likes: 0
      },
      {
        name: 'Xiaomi Redmi 13C',
        description: '8GB/256GB, Black',
        image: 'assets/3.3.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=273620100&sr=2&qid=63e362ba63bbe682adf5ec1a97d01c0f&ref=shared_link',
        likes: 0
      },
      {
        name: 'Xiaomi Redmi Note 12 Pro',
        description: '4G 8GB/256GB, Gray',
        image: 'assets/3.4.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-4g-8-gb-256-gb-seryi-109775102/?c=273620100&sr=7&qid=63e362ba63bbe682adf5ec1a97d01c0f&ref=shared_link',
        likes: 0
      },
      {
        name: 'Xiaomi Redmi Note 12 Pro+',
        description: '5G NFC 8GB/256GB, Black',
        image: 'assets/3.5.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-nfc-8-gb-256-gb-chernyi-109772767/?c=273620100&sr=12&qid=63e362ba63bbe682adf5ec1a97d01c0f&ref=shared_link',
        likes: 0
      }
    ],
    Oppo: [
      {
        name: 'OPPO A17',
        description: '4GB/64GB, Black',
        image: 'assets/4.1.jpg',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/oppo-a17-4-gb-64-gb-chernyi-107420168/?c=273620100&sr=2&qid=265c219b10a2de74e6d474d95728ecc9&ref=shared_link',
        likes: 0
      },
      {
        name: 'OPPO A77s',
        description: '8GB/127GB, Orange',
        image: 'assets/4.2.jpg',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/oppo-a77s-8-gb-128-gb-oranzhevyi-108190835/?c=273620100&sr=23&qid=265c219b10a2de74e6d474d95728ecc9&ref=shared_link',
        likes: 0
      },
      {
        name: 'OPPO A55',
        description: '4GB/64GB, Black',
        image: 'assets/4.3.jpg',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/oppo-a55-4-gb-64-gb-chernyi-104580589/?c=273620100&sr=46&qid=265c219b10a2de74e6d474d95728ecc9&ref=shared_link',
        likes: 0
      },
      {
        name: 'OPPO Reno11 F',
        description: '5G 8GB/256GB, Green',
        image: 'assets/4.4.jpg',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/oppo-reno11-f-5g-8-gb-256-gb-zelenyi-118321377/?c=273620100&sr=25&qid=265c219b10a2de74e6d474d95728ecc9&ref=shared_link',
        likes: 0
      },
      {
        name: 'OPPO A78',
        description: '8GB/256GB, Black',
        image: 'assets/4.5.jpg',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-chernyi-112808573/?c=273620100&sr=1&qid=265c219b10a2de74e6d474d95728ecc9&ref=shared_link',
        likes: 0
      }
    ]
  };
  
  ngOnInit() {
    if (!this.products) {
      this.products = {};
    }
    console.log("Текущая структура products:", this.products);
  }
  
  getProducts() {
    return Array.isArray(this.products[this.category]) ? this.products[this.category] : [];
  }
  removeProduct(product: any) {
    console.log('Список продуктов перед удалением:', this.products);
  
    if (Array.isArray(this.products[this.category])) {
      this.products[this.category] = this.products[this.category].filter((p) => p !== product);
    }
  
    console.log('Список продуктов после удаления:', this.products);
  }
}