import { DadosBusca, Resultado } from './../types/types';
import { Observable, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  private apiUrl: string = environment.apiUrl;
  precoMin: number = 0;
  precoMax: number = 0;
  constructor(private httpClient: HttpClient) {}

  getPassagens(search: any): Observable<Resultado> {
    const params = this.converterParametrosParaString(search);
    const obs = this.httpClient.get<Resultado>(
      `${this.apiUrl}/passagem/search?` + params
    );

    obs.pipe(take(1)).subscribe((res) => {
      this.precoMin = res.precoMin;
      this.precoMax = res.precoMax;
    });

    return obs;
  }
  converterParametrosParaString(busca: DadosBusca) {
    const query = Object.entries(busca)
      .map(([key, value]) => {
        if (!value) {
          return '';
        } else {
          return `${key}=${value}`;
        }
      })
      .join('&');

    return query;
  }
}
