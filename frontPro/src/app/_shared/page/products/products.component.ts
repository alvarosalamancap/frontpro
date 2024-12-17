import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductsService } from '../../products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  productsService = inject(ProductsService);
  products: any[] = [];
  filteredProducts: any[] = [];
  searchQuery: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .then((data) => {
        this.products = data.data;
        this.filteredProducts = this.products;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  // Función para redirigir al login
  redirectToLogin(): void {
    this.router.navigate(['/login']); // Ruta declarada en app.routes.ts
  }
}
