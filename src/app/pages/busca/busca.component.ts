import { PassagensService } from './../../core/services/passagens.service';
import { Component, OnInit } from '@angular/core';
import { DadosBusca, Passagem } from '../../core/types/types';
import { FormBuscaService } from '../../core/services/form-busca.service';
import { pipe, take } from 'rxjs';

@Component({
  selector: 'app-busca',
  standalone: false,
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss',
})
export class BuscaComponent implements OnInit {
  passagens: Passagem[] = [];
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
      });
  }

  busca(event: DadosBusca) {
    this.passagensService.getPassagens(event).subscribe((res) => {
      this.passagens = res.resultado;
      console.log(res);
    });
  }
}
