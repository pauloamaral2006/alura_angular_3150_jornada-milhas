import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuscaService } from '../../core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  standalone: false,
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss',
})
export class FormBuscaComponent {
  constructor(
    public dialog: MatDialog,
    public formBuscaService: FormBuscaService
  ) {}
  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
