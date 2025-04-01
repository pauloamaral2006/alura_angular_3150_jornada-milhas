import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MaterialModule } from '../core/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';

@NgModule({
  declarations: [CadastroComponent, LoginComponent, PerfilComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    AutenticacaoRoutingModule,
  ],
  exports: [CadastroComponent, LoginComponent, PerfilComponent],
})
export class AutenticacaoModule {}
