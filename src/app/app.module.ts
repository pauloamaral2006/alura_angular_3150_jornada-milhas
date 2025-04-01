import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PromocoesComponent } from './pages/home/promocoes/promocoes/promocoes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DepoimentosComponent } from './pages/home/depoimentos/depoimentos/depoimentos.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AutenticacaoInterceptor } from './core/interceptors/autentificacao.interceptor';
import { BuscaComponent } from './pages/busca/busca.component';
import { PassagemComponent } from './pages/passagem/passagem.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './core/material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromocoesComponent,
    DepoimentosComponent,
    LoginComponent,
    CadastroComponent,
    PerfilComponent,
    BuscaComponent,
    PassagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
