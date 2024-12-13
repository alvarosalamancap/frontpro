import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ola-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'], // Corregido
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  productsService = inject(ProductsService);
  products: any = [];

  constructor() {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .then((data: any) => {
        if (data && data.data && data.data.length > 0) {
          this.products = data.data;
        } else {
          console.warn('No products found or response structure is incorrect');
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }
}

  
