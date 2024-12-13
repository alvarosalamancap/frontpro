import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClient para manejar peticiones HTTP
import { RouterModule } from '@angular/router';  // Importa RouterModule para configurar las rutas
import { AppComponent } from './app.component';  // Importa tu componente principal
import { ProductsComponent } from './_shared/page/products/products.component';  // Importa tus componentes

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent  // Declara los componentes que vas a usar
  ],
  imports: [
    BrowserModule,
    HttpClientModule,       // Importa HttpClientModule para las peticiones HTTP
    RouterModule              // Importa RouterModule para las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]  // Define el componente raíz que se inicia al cargar la aplicación
})
export class AppModule { }
