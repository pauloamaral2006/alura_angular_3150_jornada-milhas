import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaUsuaria } from '../../core/types/types';
import { Router } from '@angular/router';
import { UserService } from '../../autenticacao/services/user.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  user$!: Observable<PessoaUsuaria | null>;
  constructor(private userService: UserService, private router: Router) {
    this.user$ = this.userService.retornarUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
