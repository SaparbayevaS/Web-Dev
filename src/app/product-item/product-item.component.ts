import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
  
})
export class ProductItemComponent {
  @Input() product: any; 
  @Output() remove = new EventEmitter<any>(); 

  likeProduct() {
    this.product.likes++;
  }

  shareToTelegram() {
    const message = encodeURIComponent(`Check this out: ${this.product.name} - ${this.product.link}`);
    const telegramUrl = 'https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${message}';
    window.open(telegramUrl, '_blank');
  }

  removeProduct() {
    this.remove.emit(this.product);
  }
}