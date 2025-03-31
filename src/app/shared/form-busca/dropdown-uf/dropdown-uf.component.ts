import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from '../../../core/services/unidade-federativa.service';
import { UnidadeFederativa } from '../../../core/types/types';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-dropdown-uf',
  standalone: false,
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss',
})
export class DropdownUfComponent implements OnInit {
  @Input() label!: string;
  @Input() iconePrefixo!: string;
  control = new FormControl('');

  unidadesFederativas: UnidadeFederativa[] = [];
  filteredOptions!: Observable<UnidadeFederativa[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService) {}

  ngOnInit() {
    this.unidadeFederativaService.listar().subscribe((dados) => {
      this.unidadesFederativas = dados;
    });
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(this.control.value),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): UnidadeFederativa[] {
    const filterValue = value?.toLowerCase();

    return this.unidadesFederativas.filter((estado) =>
      estado.nome.toLowerCase().includes(filterValue)
    );
  }
}
