import { Component, signal, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProdutoData } from './app.form';

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

  produtoSelecionado = signal<ProdutoData>({ nome: '', quantidade: 0, emProducao: false });

  onAlterar(produto: ProdutoData) {
    console.log('Produto a alterar:', produto);
    // aqui você chama seu serviço, abre um modal, etc.
  }
}
