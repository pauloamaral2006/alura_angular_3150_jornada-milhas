import { Component, OnInit } from '@angular/core';
import { PassagensService } from '../../core/services/passagens.service';
import { DadosBusca, Passagem } from '../../core/types/types';
import { FormBuscaService } from '../../core/services/form-busca.service';

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
    const buscaPadrao = {
      data: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    const busca = this.formBuscaService.formEstaValido
      ? this.formBuscaService.obterDadosDeBusca()
      : buscaPadrao;
  }

  busca(event: DadosBusca) {
    this.passagensService.getPassagens(event).subscribe((res) => {
      this.passagens = res.resultado;
      console.log(res);
    });
  }
}
