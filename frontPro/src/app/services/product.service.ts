import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible globalmente
})
export class ProductService {
  private baseUrl = 'http://127.0.0.1:8000/'; // URL de tu API
  public errors: string[]=[];
  private http = inject(HttpClient);
 
  }

