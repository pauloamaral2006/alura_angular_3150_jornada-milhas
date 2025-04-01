import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { DadosBusca, Destaques, Passagem } from '../core/types/types';
import { PassagensService } from './services/passagens.service';
import { FormBuscaService } from '../core/services/form-busca.service';

@Component({
  selector: 'app-busca',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss',
})
export class BuscaComponent implements OnInit {
  passagens: Passagem[] = [];
  destaques?: Destaques;
  constructor(
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService
  ) {}
  ngOnInit(): void {
    const buscaPadrao: DadosBusca = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    const busca = this.formBuscaService.formEstaValido
      ? this.formBuscaService.obterDadosDeBusca()
      : buscaPadrao;

    this.passagensService
      .getPassagens(busca)
      .pipe(take(1))
      .subscribe((res) => {
        this.passagens = res.resultado;
        this.formBuscaService.formBusca.patchValue({
          precoMin: res.precoMin,
          precoMax: res.precoMax,
        });
        this.obterDestaques();
      });
  }

  busca(event: DadosBusca) {
    this.passagensService.getPassagens(event).subscribe((res) => {
      this.passagens = res.resultado;
      this.obterDestaques();
      console.log(res);
    });
  }

  obterDestaques() {
    this.destaques = this.passagensService.obterPassagensDestaques(
      this.passagens
    );
  }
}
