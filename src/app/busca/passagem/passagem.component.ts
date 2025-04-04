import { Component, Input } from '@angular/core';
import { Passagem } from '../../core/types/types';

@Component({
  selector: 'app-passagem',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './passagem.component.html',
  styleUrl: './passagem.component.scss',
})
export class PassagemComponent {
  @Input() textoIdaVolta!: string;
  @Input() passagem!: Passagem;
}
