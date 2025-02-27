import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "../app/product-list/product-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductComponent {
  categories = ['Apple', 'Samsung', 'Xiaomi', 'Oppo'];
  selectedCategory: string | null = null;

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

}