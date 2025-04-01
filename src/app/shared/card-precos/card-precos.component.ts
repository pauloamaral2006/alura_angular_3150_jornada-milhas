import { Component, Input } from '@angular/core';
import { Passagem } from '../../core/types/types';

@Component({
  selector: 'app-card-precos',
  standalone: false,
  templateUrl: './card-precos.component.html',
  styleUrl: './card-precos.component.scss',
})
export class CardPrecosComponent {
  @Input() destacadaPor: string = '';
  @Input() passagem?: Passagem;
  @Input() variant: 'primary' | 'secondary' | 'default' = 'primary';
}
