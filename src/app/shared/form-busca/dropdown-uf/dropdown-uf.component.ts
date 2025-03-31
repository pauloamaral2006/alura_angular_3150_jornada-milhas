import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from '../../../core/services/unidade-federativa.service';
import { UnidadeFederativa } from '../../../core/types/types';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { FormBuscaService } from '../../../core/services/form-busca.service';

@Component({
  selector: 'app-dropdown-uf',
  standalone: false,
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss',
})
export class DropdownUfComponent implements OnInit {
  @Input() label!: string;
  @Input() iconePrefixo!: string;
  control!: FormControl;

  unidadesFederativas: UnidadeFederativa[] = [];
  filteredOptions!: Observable<UnidadeFederativa[]>;

  constructor(
    private unidadeFederativaService: UnidadeFederativaService,
    private formBuscaService: FormBuscaService
  ) {}

  ngOnInit() {

    this.unidadeFederativaService.listar().subscribe((dados) => {
      this.unidadesFederativas = dados;
    });

    /* Início  */
    /* Essa parte do código foi necessário para realizar a vinculação correta do input do html com a propriedde no FormBuscaService, pois o mesmo campo é utilizado para referenciar dois campos  distintos (origem e destino)*/

    this.control = this.formBuscaService.obterControle(
      this.label.toLowerCase()
    );
    /* Fim */
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(this.control.value),
      map((value) => {
        return this._filter(value as string);
      })
    );
  }

  private _filter(value: string): UnidadeFederativa[] {
    const filterValue = value?.toLowerCase();

    return this.unidadesFederativas.filter((estado) =>
      estado.nome.toLowerCase().includes(filterValue)
    );
  }
}
