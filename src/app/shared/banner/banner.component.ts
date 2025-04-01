import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() src = '';
  @Input() alt = '';
}
