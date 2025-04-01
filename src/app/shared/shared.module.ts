import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { CardBuscaComponent } from './card-busca/card-busca.component';
import { CardDepoimentoComponent } from './card-depoimento/card-depoimento.component';
import { FormBuscaComponent } from './form-busca/form-busca.component';
import { ModalComponent } from './modal/modal.component';
import { BotaoControleComponent } from './botao-controle/botao-controle.component';
import { DropdownUfComponent } from './dropdown-uf/dropdown-uf.component';
import { SeletorPassageiroComponent } from './seletor-passageiro/seletor-passageiro.component';
import { FormBaseComponent } from './form-base/form-base.component';
import { FiltrosComplementaresComponent } from './form-busca/filtros-complementares/filtros-complementares.component';
import { LabelComponent } from './form-busca/filtros-complementares/label/label.component';
import { CompanhiasComponent } from './form-busca/filtros-complementares/companhias/companhias.component';
import { ParadasComponent } from './form-busca/filtros-complementares/paradas/paradas.component';
import { PrecosComponent } from './form-busca/filtros-complementares/precos/precos.component';
import { CardPrecosComponent } from './card-precos/card-precos.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    FooterComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    ModalComponent,
    BotaoControleComponent,
    DropdownUfComponent,
    SeletorPassageiroComponent,
    FormBaseComponent,
    FiltrosComplementaresComponent,
    LabelComponent,
    CompanhiasComponent,
    ParadasComponent,
    PrecosComponent,
    CardPrecosComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    FooterComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    ModalComponent,
    BotaoControleComponent,
    DropdownUfComponent,
    SeletorPassageiroComponent,
    FormBaseComponent,
    FiltrosComplementaresComponent,
    LabelComponent,
    CompanhiasComponent,
    ParadasComponent,
    PrecosComponent,
    CardPrecosComponent,
  ],
})
export class SharedModule {}
