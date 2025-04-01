import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PassagensService } from '../../services/passagens.service';
import { FormBuscaService } from '../../../core/services/form-busca.service';

@Component({
  selector: 'app-precos',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './precos.component.html',
  styleUrl: './precos.component.scss',
})
export class PrecosComponent {
  precoMin: FormControl<number>;
  precoMax: FormControl<number>;

  constructor(
    public passagemService: PassagensService,
    private formBuscaService: FormBuscaService
  ) {
    this.precoMin = this.formBuscaService.obterControle('precoMin');
    this.precoMax = this.formBuscaService.obterControle('precoMax');
  }
}
