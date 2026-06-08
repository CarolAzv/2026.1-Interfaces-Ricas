import { Injectable } from '@angular/core';
import { ProdutoData } from '../app.form';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private readonly chave = 'produtos';

  listar(): ProdutoData[] {
    const json = localStorage.getItem(this.chave);
    return json ? JSON.parse(json) : [];
  }

  salvar(produtos: ProdutoData[]): void {
    localStorage.setItem(this.chave, JSON.stringify(produtos));
  }

  deletar(produto: ProdutoData): void {
    const produtos = this.listar();
    const index = produtos.findIndex((item) => item.nome === produto.nome);
    if (index !== -1) {
      produtos.splice(index, 1);
      this.salvar(produtos);
    }
  }

  atualizar(produtoAtualizado: ProdutoData): void {
    const produtos = this.listar();
    const index = produtos.findIndex((item) => item.nome === produtoAtualizado.nome);
    if (index !== -1) {
      produtos[index] = produtoAtualizado;
      this.salvar(produtos);
    }
  }
}
