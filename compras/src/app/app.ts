import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { form, required, min, FormField } from '@angular/forms/signals';

import { ProdutoData, ProdutoModel } from './app.form';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    FormField,
    RouterOutlet,
    CheckboxModule,
    ButtonModule,
    FormsModule,
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

  SalvarProduto(event: Event) {
    event.preventDefault();
    if (!this.ProdutoForm().valid) return;

    const produto: ProdutoData = { ...this.ProdutoModel() };
    const produtoEditando = this.produtoEditando();

    if (produtoEditando) {
      this.produtos.set(
        this.produtos().map((item) => item === produtoEditando ? produto : item)
      );
    } else {
      this.produtos.update((lista) => [...lista, produto]);
    }

    this.CancelarEdicao();
  }

  AlterarProduto(produto: ProdutoData) {
    this.produtoEditando.set(produto);
    this.ProdutoModel.set({
      nome: produto.nome,
      quantidade: produto.quantidade,
      emProducao: produto.emProducao,
    });
  }

  DeletarProduto(produto: ProdutoData) {
    this.produtos.set(this.produtos().filter((item) => item !== produto));

    if (this.produtoEditando() === produto) {
      this.CancelarEdicao();
    }
  }

  CancelarEdicao() {
    this.produtoEditando.set(null);
    this.ProdutoModel.set({ ...ProdutoModel });
    this.ProdutoForm().reset;
  }
}
