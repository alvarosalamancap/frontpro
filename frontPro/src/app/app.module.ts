import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Importa RouterModule desde Angular
import { AppComponent } from './app.component';
import { routes } from './app.routes';  // Importa las rutas desde tu archivo de rutas

@NgModule({
  declarations: [
    AppComponent  // Declara tu componente principal
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Asegúrate de tener RouterModule.forRoot(routes) aquí
  ],
  bootstrap: [AppComponent]  // Indica el componente raíz
})
export class AppModule {}
