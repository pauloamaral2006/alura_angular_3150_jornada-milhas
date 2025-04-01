import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormBuscaService } from '../../core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  standalone: false,
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss',
})
export class FormBuscaComponent {
  @Output() realizarBusca = new EventEmitter();
  constructor(public formBuscaService: FormBuscaService) {}

  buscar() {
    const formBuscaValue = this.formBuscaService.formBusca.value;
    this.realizarBusca.emit(formBuscaValue);
  }
}
