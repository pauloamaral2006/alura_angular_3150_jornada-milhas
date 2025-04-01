import { Component, OnInit } from '@angular/core';
import { Promocao } from '../../../core/types/types';
import { PromocaoService } from '../../services/promocao.service';

@Component({
  selector: 'app-promocoes',
  standalone: false,
  templateUrl: './promocoes.component.html',
  styleUrl: './promocoes.component.scss',
})
export class PromocoesComponent implements OnInit {
  promocoes!: Promocao[];
  constructor(private service: PromocaoService) {}
  ngOnInit(): void {
    this.service.listar().subscribe((resposta) => {
      this.promocoes = resposta;
    });
  }
}
