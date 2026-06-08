import { Component, Input, signal, Signal, WritableSignal } from '@angular/core';
import { NgIf } from '@angular/common';
import { form, required, min, FormField } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { ProdutoData, ProdutoModel } from '../../app.form';

@Component({
  standalone: true,
  selector: 'app-incluir',
  imports: [NgIf, FormField, FormsModule, CheckboxModule, ButtonModule, InputTextModule],
  templateUrl: './incluir.html',
  styleUrl: './incluir.css',
})
export class Incluir {
  @Input() produtos!: WritableSignal<ProdutoData[]>;

  protected readonly ProdutoModel = signal<ProdutoData>({ ...ProdutoModel });
  protected readonly ProdutoForm = form(this.ProdutoModel, (produto) => {
    required(produto.nome, { message: 'Um nome é necessário' });
    min(produto.quantidade, 0, { message: 'A quantidade não pode ser negativa' });
  });
  protected readonly produtoEditando = signal<ProdutoData | null>(null);

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
      this.produtos.update((lista: ProdutoData[]) => [...lista, produto]);
    }

    this.CancelarEdicao();
  }

  CancelarEdicao() {
    this.produtoEditando.set(null);
    this.ProdutoModel.set({ ...ProdutoModel });
    this.ProdutoForm().reset();
  }
}
