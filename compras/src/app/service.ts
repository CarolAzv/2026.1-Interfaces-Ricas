import { Injectable } from '@angular/core';
import { Produto } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  produtos: Produto[] = [

  ];

  addProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  getProduto(): Produto[] {
    return this.produtos;
  }

  getProdutoById(id: number): Produto | undefined {
    return this.produtos.find(produto => produto.id === id);
  }

  updateProduto(index: number, updated: Produto): void {
    this.produtos[index] = updated;
  }

  removeProduto(index: number): void {
    this.produtos.splice(index, 1);
  }
}