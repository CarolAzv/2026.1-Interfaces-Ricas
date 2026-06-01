import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProdutoData } from '../../app.form';

@Component({
  standalone: true,
  selector: 'app-deletar',
  imports: [ButtonModule],
  templateUrl: './deletar.html',
  styleUrl: './deletar.css',
})
export class Deletar {
  @Input() produto!: ProdutoData;
  @Output() deletar = new EventEmitter<ProdutoData>();

  DeletarProduto() {
    this.deletar.emit(this.produto);
  }
}
