import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProdutoData } from '../../app.form';

@Component({
  standalone: true,
  selector: 'app-alterar',
  imports: [ButtonModule],
  templateUrl: './alterar.html',
  styleUrl: './alterar.css',
})
export class Alterar {
  produto = input.required<ProdutoData>();
  alterar = output<ProdutoData>();

  alterarProduto() {
    this.alterar.emit(this.produto());
  }
}
