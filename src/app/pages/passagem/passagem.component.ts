import { Component, Input } from '@angular/core';
import { Passagem } from '../../core/types/types';

@Component({
  selector: 'app-passagem',
  standalone: false,
  templateUrl: './passagem.component.html',
  styleUrl: './passagem.component.scss',
})
export class PassagemComponent {
  @Input() passagem!: Passagem;
}
