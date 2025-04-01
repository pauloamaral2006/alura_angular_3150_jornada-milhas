import { Component } from '@angular/core';
import { PassagensService } from '../../../../core/services/passagens.service';
import { FormBuscaService } from '../../../../core/services/form-busca.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-precos',
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
