import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private router: Router) {}

  onLoginClick(): void {
    // Redirigir a la página de login
    this.router.navigate(['/login']);
  }
}
