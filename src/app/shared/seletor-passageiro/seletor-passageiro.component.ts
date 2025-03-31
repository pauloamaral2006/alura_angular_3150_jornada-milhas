import { Component, forwardRef, Input, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  standalone: false,
  templateUrl: './seletor-passageiro.component.html',
  styleUrl: './seletor-passageiro.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true,
    },
  ],
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
  @Input() titulo: string = '';
  @Input() subTitulo: string = '';

  value: number = 0;
  onChange = (val: number) => {};
  onTouche = () => {};

  writeValue(val: number): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouche = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  incrementar() {
    this.value += 1;
    this.onChange(this.value);
    this.onTouche();
  }

  decrementar() {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onTouche();
    }
  }
}
