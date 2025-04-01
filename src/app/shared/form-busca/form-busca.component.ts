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
    if (this.formBuscaService.formEstaValido) {
      const formBuscaValue = this.formBuscaService.obterDadosDeBusca();
      this.realizarBusca.emit(formBuscaValue);
    } else {
      alert('O formulário precisa ser preenchido.');
    }
  }
}
