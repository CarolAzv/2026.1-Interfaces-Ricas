import { Component, signal } from '@angular/core';
import { form, required, min, FormField } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { ProdutoData, ProdutoModel } from '../../app.form';

@Component({
  selector: 'app-incluir',
  imports: [FormField, FormsModule, CheckboxModule, ButtonModule, InputTextModule],
  templateUrl: './incluir.html',
  styleUrl: './incluir.css',
})
export class Incluir {
  protected readonly ProdutoModel = signal<ProdutoData>({ ...ProdutoModel });
  protected readonly ProdutoForm = form(this.ProdutoModel, (produto) => {
    required(produto.nome, { message: 'Um nome é necessário' });
    min(produto.quantidade, 0, { message: 'A quantidade não pode ser negativa' });
  });
  protected readonly produtoEditando = signal<ProdutoData | null>(null);
  protected readonly produtos = signal<ProdutoData[]>([]);

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

  CancelarEdicao() {
    this.produtoEditando.set(null);
    this.ProdutoModel.set({ ...ProdutoModel });
    this.ProdutoForm().reset;
  }
}
