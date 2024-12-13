import { inject,Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

private baseUrl = 'http://127.0.0.1:8000'
public errors: string[] = [];
private http = inject(HttpClient);




}
