import { Component, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { NgIf } from '@angular/common';
import { form, required, min, FormField } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { ProdutoData, ProdutoModel } from '../../app.form';

@Component({
  standalone: true,
  selector: 'app-alterar',
  imports: [NgIf, FormField, FormsModule, CheckboxModule, ButtonModule, InputTextModule],
  templateUrl: './alterar.html',
  styleUrl: './alterar.css',
})
export class Alterar implements OnInit {
  @Input() produtos!: WritableSignal<ProdutoData[]>;
  @Input() produtoSelecionado!: ProdutoData;
  @Input() index!: number;

  protected readonly editando = signal(false);
  protected readonly ProdutoModel = signal<ProdutoData>({ ...ProdutoModel });
  protected readonly ProdutoForm = form(this.ProdutoModel, (produto) => {
    required(produto.nome, { message: 'Um nome é necessário' });
    min(produto.quantidade, 0, { message: 'A quantidade não pode ser negativa' });
  });

  ngOnInit() {
    this.ProdutoModel.set({ ...this.produtoSelecionado });
  }

  alternarEdicao() {
    this.editando.update((atual) => !atual);
    if (this.editando()) {
      this.ProdutoModel.set({ ...this.produtoSelecionado });
    } else {
      this.Resetar();
    }
  }

  AlterarProduto(event: Event) {
    event.preventDefault();
    if (!this.ProdutoForm().valid) return;

    const produtoAtualizado: ProdutoData = { ...this.ProdutoModel() };

    this.produtos.update((produtos) => {
      const produtosAtualizados = [...produtos];
      produtosAtualizados[this.index] = produtoAtualizado;
      return produtosAtualizados;
    });

    this.editando.set(false);
    this.Resetar();
  }

  Resetar() {
    this.ProdutoModel.set({ ...this.produtoSelecionado });
    this.ProdutoForm().reset();
  }
}
