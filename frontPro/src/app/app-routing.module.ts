import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './_auth/components/loginform/loginform.component'; // Ruta ajustada al componente

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirección por defecto
  { path: 'login', component: LoginformComponent },      // Ruta al formulario de login
  // Agrega más rutas aquí según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
