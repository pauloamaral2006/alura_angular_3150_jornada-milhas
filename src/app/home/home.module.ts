import { NgModule } from '@angular/core';
import { PromocoesComponent } from './promocoes/promocoes/promocoes.component';
import { DepoimentosComponent } from './depoimentos/depoimentos/depoimentos.component';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PromocoesComponent, DepoimentosComponent, HomeComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [PromocoesComponent, DepoimentosComponent, HomeComponent],
})
export class HomeModule {}
