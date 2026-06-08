import { Component, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { form, required, min, FormField } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { ProdutoData, ProdutoModel } from '../../app.form';

@Component({
  standalone: true,
  selector: 'app-alterar',
  imports: [FormField, FormsModule, CheckboxModule, ButtonModule, InputTextModule],
  templateUrl: './alterar.html',
  styleUrl: './alterar.css',
})
export class Alterar implements OnInit {
  @Input() produtos!: WritableSignal<ProdutoData[]>;
  @Input() produtoSelecionado!: ProdutoData;

  protected readonly ProdutoModel = signal<ProdutoData>({ ...ProdutoModel });
  protected readonly ProdutoForm = form(this.ProdutoModel, (produto) => {
    required(produto.nome, { message: 'Um nome é necessário' });
    min(produto.quantidade, 0, { message: 'A quantidade não pode ser negativa' });
  });

  ngOnInit() {
    // Preenche o formulário com os dados do produto recebido via @Input
    this.ProdutoModel.set({ ...this.produtoSelecionado });
  }

  AlterarProduto(event: Event) {
    event.preventDefault();
    if (!this.ProdutoForm().valid) return;

    const produtoAtualizado: ProdutoData = { ...this.ProdutoModel() };

    this.produtos.set(
      this.produtos().map((item) =>
        item === this.produtoSelecionado ? produtoAtualizado : item
      )
    );

    this.Resetar();
  }

  Resetar() {
    // Restaura o formulário para os dados originais do produto
    this.ProdutoModel.set({ ...this.produtoSelecionado });
    this.ProdutoForm().reset();
  }
}