import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProdutoData } from './app.form';
import { ProdutoService } from './service/produto';

import { Listar } from './components/listar/listar';
import { Incluir } from './components/incluir/incluir';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Listar,
    Incluir,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly local = signal('Menu Principal');
  protected readonly produtos = signal<ProdutoData[]>([]);

  constructor(private produtoService: ProdutoService) {
    this.produtos.set(this.produtoService.listar());
    effect(() => this.produtoService.salvar(this.produtos()));
  }
}
