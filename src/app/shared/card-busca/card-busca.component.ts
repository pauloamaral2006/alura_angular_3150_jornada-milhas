import { Component, Input } from '@angular/core';
import { Promocao } from '../../core/types/types';

@Component({
  selector: 'app-card-busca',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss',
})
export class CardBuscaComponent {
  @Input() promocao!: Promocao;
}
