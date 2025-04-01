import { UnidadeFederativa } from './../../core/types/types';
import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from '../../core/services/unidade-federativa.service';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-dropdown-uf',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss',
})
export class DropdownUfComponent implements OnInit {
  @Input() label!: string;
  @Input() iconePrefixo!: string;
  @Input() placeholder!: string;
  @Input() control!: FormControl;

  unidadesFederativas: UnidadeFederativa[] = [];
  filteredOptions!: Observable<UnidadeFederativa[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService) {}

  ngOnInit() {
    this.unidadeFederativaService.listar().subscribe((dados) => {
      this.unidadesFederativas = dados;
    });

    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(this.control.value),
      map((value) => {
        return this._filter(value as string);
      })
    );
  }

  private _filter(value: string | UnidadeFederativa): UnidadeFederativa[] {
    const nome = typeof value === 'string' ? value : value?.nome;
    const filterValue = nome?.toLowerCase();

    return this.unidadesFederativas.filter((estado) =>
      estado.nome.toLowerCase().includes(filterValue)
    );
  }

  displayFn(estado: UnidadeFederativa): string {
    return estado && estado.nome ? estado.nome : '';
  }
}
