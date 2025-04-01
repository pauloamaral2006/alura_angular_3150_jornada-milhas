import { TokenService } from '../services/token.service';
import { Component, OnInit } from '@angular/core';
import { PessoaUsuaria } from '../../core/types/types';
import { FormGroup } from '@angular/forms';
import { FormularioService } from '../../core/services/formulario.service';
import { Router } from '@angular/router';
import { CadastrooService } from '../services/cadastroo.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfil',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilComponent implements OnInit {
  titulo = 'Olá ';
  textoBotao = 'ATUALIZAR';
  perfilComponent = true;

  nome = '';
  cadastro!: PessoaUsuaria;
  form!: FormGroup | null;

  constructor(
    private tokenService: TokenService,
    private cadastroService: CadastrooService,
    private formularioService: FormularioService,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.cadastroService.buscarCadastro().subscribe((cadastro) => {
      this.cadastro = cadastro;
      this.nome = this.cadastro.nome;
      this.carregarFormulario();
    });
  }

  carregarFormulario() {
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      telefone: this.cadastro.telefone,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      genero: this.cadastro.genero,
      cidade: this.cadastro.cidade,
      estado: this.cadastro.estado,
    });
  }
  deslogar() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
  atualizar() {
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado,
    };

    this.cadastroService.editarCadastro(dadosAtualizados).subscribe({
      next: () => {
        alert('Cadastro editado com sucesso.');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log('Erro ao atualziar cadastro.', err);
      },
    });
  }
}
