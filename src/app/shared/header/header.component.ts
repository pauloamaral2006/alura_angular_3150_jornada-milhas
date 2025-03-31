import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Observable } from 'rxjs';
import { PessoaUsuaria } from '../../core/types/types';
import { Router } from '@angular/router';

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
