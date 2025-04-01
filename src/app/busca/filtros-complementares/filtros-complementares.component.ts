import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from '../../core/services/form-busca.service';
import { PassagensService } from '../services/passagens.service';

@Component({
  selector: 'app-filtros-complementares',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './filtros-complementares.component.html',
  styleUrl: './filtros-complementares.component.scss',
})
export class FiltrosComplementaresComponent {
  @Output() realizarBusca = new EventEmitter();
  constructor(
    public formBuscaService: FormBuscaService,
    private passagemService: PassagensService
  ) {}

  busca() {
    if (!this.formBuscaService.formEstaValido) {
      this.formBuscaService.formBusca.markAllAsTouched();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      return;
    }

    this.realizarBusca.emit(this.formBuscaService.obterDadosDeBusca());
  }

  limparFiltros() {
    this.formBuscaService.formBusca.patchValue({
      conexoes: null,
      companhias: null,
      precoMin: this.passagemService.precoMin,
      precoMax: this.passagemService.precoMax,
    });
  }
}
