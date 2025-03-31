import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { tap } from 'rxjs/operators';
interface AuthResponse {
  access_token: string;
}
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient, private userService: UserService) {}
  autenticar(
    email: string,
    senha: string
  ): Observable<HttpResponse<AuthResponse>> {
    return this.http
      .post<AuthResponse>(
        `${this.apiUrl}/auth/login`,
        {
          email,
          senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((response) => {
          const authToken = response.body?.access_token || '';
          this.userService.salvarToken(authToken);
        })
      );
  }
}
