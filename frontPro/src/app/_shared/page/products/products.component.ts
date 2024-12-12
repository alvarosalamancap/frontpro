import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private router: Router) {}

  iniciarSesion() {
    this.router.navigate(['/login']); // Cambia '/login' a la ruta correspondiente
  }

  registrarse() {
    this.router.navigate(['/register']); // Cambia '/register' a la ruta correspondiente
  }
}
