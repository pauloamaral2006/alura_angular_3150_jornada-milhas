import { Component, OnInit } from '@angular/core';
import { PassagensService } from '../../core/services/passagens.service';
import { Passagem } from '../../core/types/types';

@Component({
  selector: 'app-busca',
  standalone: false,
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss',
})
export class BuscaComponent implements OnInit {
  passagens: Passagem[] = [];
  constructor(private passagensService: PassagensService) {}
  ngOnInit(): void {
    const buscaPadrao = {
      data: new Date().toISOString,
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    this.passagensService.getPassagens(buscaPadrao).subscribe((res) => {
      this.passagens = res.resultado;
      console.log(res);
    });
  }
}
