import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Depoimento } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepoimentoService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listar(): Observable<Depoimento[]> {
    return this.http.get<Depoimento[]>(`${this.apiUrl}/depoimentos`);
  }
}
