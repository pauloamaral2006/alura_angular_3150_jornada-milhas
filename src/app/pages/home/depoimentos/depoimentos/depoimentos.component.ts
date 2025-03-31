import { Component, OnInit } from '@angular/core';
import { Depoimento } from '../../../../core/types/types';
import { DepoimentoService } from '../../../../core/services/depoimento.service';

@Component({
  selector: 'app-depoimentos',
  standalone: false,
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss',
})
export class DepoimentosComponent implements OnInit {
  depoimentos: Depoimento[] = [];
  constructor(private service: DepoimentoService) {}
  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.depoimentos = res;
    });
  }
}
