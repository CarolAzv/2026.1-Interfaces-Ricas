import { Component, Input, signal, Signal } from '@angular/core';
import { form, required, min } from '@angular/forms/signals';
import { ButtonModule } from 'primeng/button';

import { ProdutoData, ProdutoModel } from '../../app.form';
import { Alterar } from '../alterar/alterar';
import { Deletar } from '../deletar/deletar';

@Component({
  standalone: true,
  selector: 'app-listar',
  imports: [
    Alterar, 
    Deletar, 
    ButtonModule
  ],
  templateUrl: './listar.html',
  styleUrl: './listar.css',
})
export class Listar {
  @Input() produtos!: Signal<ProdutoData[]>;
  protected readonly produtoEditando = signal<ProdutoData | null>(null);
  protected readonly ProdutoModel = signal<ProdutoData>({ ...ProdutoModel });
  protected readonly ProdutoForm = form(this.ProdutoModel, (produto) => {
    required(produto.nome, { message: 'Um nome é necessário' });
    min(produto.quantidade, 0, { message: 'A quantidade não pode ser negativa' });
  });

  AlterarProduto(produto: ProdutoData) {
    this.produtoEditando.set(produto);
    this.ProdutoModel.set({ ...produto });
  }

  DeletarProduto(produto: ProdutoData) {
    this.produtoEditando.set(produto);
    this.produtos.update((lista) => lista.filter((item) => item !== produto));
  }

  CancelarEdicao() {
    this.produtoEditando.set(null);
    this.ProdutoModel.set({ ...ProdutoModel });
    this.ProdutoForm().reset();
  }
}

