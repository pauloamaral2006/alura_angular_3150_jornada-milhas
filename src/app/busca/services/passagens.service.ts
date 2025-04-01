import { Observable, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  DadosBusca,
  Destaques,
  Passagem,
  Resultado,
} from '../../core/types/types';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  private apiUrl: string = environment.apiUrl;
  precoMin = 0;
  precoMax = 0;
  constructor(private httpClient: HttpClient) {}

  getPassagens(search: DadosBusca): Observable<Resultado> {
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
  obterPassagensDestaques(passagem: Passagem[]): Destaques | undefined {
    if (!passagem.length) {
      return undefined;
    }
    const ordenadoPorTempo = [...passagem].sort(
      (a, b) => a.tempoVoo - b.tempoVoo
    );
    const ordenadoPorPreco = [...passagem].sort((a, b) => a.total - b.total);

    const maisRapida = ordenadoPorTempo[0];
    const maisBarata = ordenadoPorPreco[0];

    const ordenadoPorMedia = [...passagem].sort((a, b) => {
      const pontuacaoA =
        (a.tempoVoo / maisBarata.tempoVoo + a.total / maisBarata.total) / 2;
      const pontuacaoB =
        (b.tempoVoo / maisBarata.total + b.total / maisBarata.total) / 2;
      return pontuacaoA - pontuacaoB;
    });
    const sugerida = ordenadoPorMedia[0];

    return { maisRapida, maisBarata, sugerida };
  }
}
