import { Component, Input } from '@angular/core';
import { Passagem } from '../../core/types/types';

@Component({
  selector: 'app-card-precos',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './card-precos.component.html',
  styleUrl: './card-precos.component.scss',
})
export class CardPrecosComponent {
  @Input() destacadaPor = '';
  @Input() passagem?: Passagem;
  @Input() variant: 'primary' | 'secondary' | 'default' = 'primary';
}
