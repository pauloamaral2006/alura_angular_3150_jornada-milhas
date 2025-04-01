import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
