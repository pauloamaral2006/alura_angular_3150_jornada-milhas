import { Component } from '@angular/core';

@Component({
  selector: 'app-precos',
  standalone: false,
  templateUrl: './precos.component.html',
  styleUrl: './precos.component.scss',
})
export class PrecosComponent {
  precoMin?: number = 0;
  precoMax?: number = 5000;
}
