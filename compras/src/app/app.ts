import { Component, signal, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProdutoData } from './app.form';

import { Listar } from './components/listar/listar';
import { Incluir } from './components/incluir/incluir';
import { Deletar } from './components/deletar/deletar';
import { Alterar } from './components/alterar/alterar';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Listar,
    Incluir,
    Deletar,
    Alterar,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  protected readonly local = signal('Menu Principal');
  protected readonly produtos = signal<ProdutoData[]>([]);

  produtoSelecionado = signal<ProdutoData>({ /* dados do produto */ });

  onAlterar(produto: ProdutoData) {
    console.log('Produto a alterar:', produto);
    // aqui você chama seu serviço, abre um modal, etc.
  }
}
