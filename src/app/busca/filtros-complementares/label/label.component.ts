import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
})
export class LabelComponent {
  @Input() texto = '';
}
