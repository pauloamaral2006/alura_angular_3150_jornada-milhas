import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-busca',
  standalone: false,
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss',
})
export class FormBuscaComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
