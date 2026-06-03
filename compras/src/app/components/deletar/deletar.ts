import { Component, input, output } from '@angular/core';
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
  produto = input.required<ProdutoData>();
  deletar = output<ProdutoData>();

  deletarProduto() {
    this.deletar.emit(this.produto());
  }
}
