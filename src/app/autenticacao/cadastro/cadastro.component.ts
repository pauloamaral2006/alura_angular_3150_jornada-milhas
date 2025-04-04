import { Component } from '@angular/core';
import { FormularioService } from '../../core/services/formulario.service';
import { PessoaUsuaria } from '../../core/types/types';
import { Router } from '@angular/router';
import { CadastrooService } from '../services/cadastroo.service';

@Component({
  selector: 'app-cadastro',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  perfilComponent = false;

  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastrooService,
    private router: Router
  ) {}
  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();

    if (formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso.', value);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro.', err);
        },
      });
    }
  }
}
