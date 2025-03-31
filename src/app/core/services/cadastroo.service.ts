import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PessoaUsuaria } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class CadastrooService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.post<PessoaUsuaria>(
      `${this.apiUrl}/auth/cadastro`,
      pessoaUsuaria
    );
  }
}
