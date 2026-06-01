import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { form, required, min, FormField } from '@angular/forms/signals';

import { ProdutoData, ProdutoModel } from './app.form';
import { Listar } from './components/listar/listar';
import { Incluir } from './components/incluir/incluir';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    FormField,
    RouterOutlet,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    Listar,
    Incluir,
  ],
  templateUrl: './html/app.html',
  styleUrl: './css/app.css',
})
export class App {
  protected readonly local = signal('Menu Principal');
  protected readonly produtos = signal<ProdutoData[]>([]);
  protected readonly produtoEditando = signal<ProdutoData | null>(null);

  protected readonly ProdutoModel = signal<ProdutoData>({ ...ProdutoModel });
  protected readonly ProdutoForm = form(this.ProdutoModel, (produto) => {
    required(produto.nome, { message: 'Um nome é necessário' });
    min(produto.quantidade, 0, { message: 'A quantidade não pode ser negativa' });
  });

  DeletarProduto(produto: ProdutoData) {
    this.produtos.set(this.produtos().filter((item) => item !== produto));

    if (this.produtoEditando() === produto) {
      this.produtoEditando.set(null);
    }
  }
}
