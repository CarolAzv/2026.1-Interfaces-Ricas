import { Component, Input, WritableSignal } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { ProdutoData } from '../../app.form';
import { Alterar } from '../alterar/alterar';
import { Deletar } from '../deletar/deletar';

@Component({
  standalone: true,
  selector: 'app-listar',
  imports: [NgForOf, Alterar, Deletar, ButtonModule],
  templateUrl: './listar.html',
  styleUrl: './listar.css',
})
export class Listar {
  @Input() produtos!: WritableSignal<ProdutoData[]>;

  DeletarProduto(produto: ProdutoData) {
    this.produtos.update((lista: ProdutoData[]) => lista.filter((item: ProdutoData) => item !== produto));
  }
}

