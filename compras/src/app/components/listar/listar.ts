import { Component, signal } from '@angular/core';
import { form, required, min } from '@angular/forms/signals';

import { ProdutoData, ProdutoModel } from '../../app.form';
import { Alterar } from '../alterar/alterar';
import { Deletar } from '../deletar/deletar';

@Component({
  standalone: true,
  selector: 'app-listar',
  imports: [Alterar, Deletar],
  templateUrl: './listar.html',
  styleUrl: './listar.css',
})
export class Listar {
  protected readonly produtos = signal<ProdutoData[]>([]);
  protected readonly produtoEditando = signal<ProdutoData | null>(null);
  protected readonly ProdutoModel = signal<ProdutoData>({ ...ProdutoModel });
  protected readonly ProdutoForm = form(this.ProdutoModel, (produto) => {
    required(produto.nome, { message: 'Um nome é necessário' });
    min(produto.quantidade, 0, { message: 'A quantidade não pode ser negativa' });
  });

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
    this.ProdutoForm().reset();
  }
}

