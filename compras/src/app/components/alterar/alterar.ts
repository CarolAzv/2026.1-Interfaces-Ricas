import { Component, signal } from '@angular/core';
import { form, required, min, FormField } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { ProdutoData, ProdutoModel } from '../../app.form';

@Component({
  selector: 'app-alterar',
  imports: [FormField, FormsModule, CheckboxModule, ButtonModule, InputTextModule],
  templateUrl: './alterar.html',
  styleUrl: './alterar.css',
})
export class Alterar {
  protected readonly ProdutoModel = signal<ProdutoData>({ ...ProdutoModel });
  protected readonly ProdutoForm = form(this.ProdutoModel, (produto) => {
    required(produto.nome, { message: 'Um nome é necessário' });
    min(produto.quantidade, 0, { message: 'A quantidade não pode ser negativa' });
  });
  protected readonly produtoEditando = signal<ProdutoData | null>(null);
  protected readonly produtos = signal<ProdutoData[]>([]);

  AlterarProduto(produto: ProdutoData) {
    this.produtoEditando.set(produto);
    this.ProdutoModel.set({
      nome: produto.nome,
      quantidade: produto.quantidade,
      emProducao: produto.emProducao,
    });
  }

  CancelarEdicao() {
    this.produtoEditando.set(null);
    this.ProdutoModel.set({ ...ProdutoModel });
    this.ProdutoForm().reset;
  }
}
