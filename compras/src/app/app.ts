import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';

import { produtoForm } from './app.form';


interface Produto {
  nome: string;
  quantidade: number;
  emProducao: string;
}

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, InputTextModule, InputNumberModule, 
            CheckboxModule, ButtonModule, ReactiveFormsModule, FormField
            ],
  templateUrl: './html/app.html',
  styleUrl: './css/app.css'
})


export class App {
  protected readonly local = signal('Menu Principal');
  protected readonly produtos = signal<Produto[]>([]);
  protected readonly produtoEditando = signal<Produto | null>(null);
  protected readonly produtoForm = produtoForm;


  protected onSalvarProduto(event: Event) {
    this.produtoForm().invalid()
    event.preventDefault();

    // ler valores diretamente do produtoForm (Signal Forms)
    const nome = String(this.produtoForm.nome().value() ?? '').trim();
    const quantidade = Number(this.produtoForm.quantidade().value());
    const emProducaoChecked = !!this.produtoForm.emProducao().value();
    const emProducao = emProducaoChecked ? 'Sim' : 'Não';

    if (!nome || Number.isNaN(quantidade)) {
      return;
    }

    if (this.produtoEditando()) {
      // Editando
      this.produtos.update((lista) =>
        lista.map(p => p === this.produtoEditando() ? { nome, quantidade, emProducao } : p)
      );
      this.produtoEditando.set(null);
      // resetar campos do form
      this.produtoForm.nome().value.set('');
      this.produtoForm.quantidade().value.set(0);
      this.produtoForm.emProducao().value.set(false);
    } else {
      // Adicionando
      this.produtos.update((lista) => [
        ...lista,
        { nome, quantidade, emProducao }
      ]);
    }
    // resetar campos do form
    this.produtoForm.nome().value.set('');
    this.produtoForm.quantidade().value.set(0);
    this.produtoForm.emProducao().value.set(false);
  }


  protected onAlterarProduto(produto: Produto) {
    this.produtoEditando.set(produto);
    // popular produtoForm com os valores do produto selecionado
    this.produtoForm.nome().value.set(produto.nome);
    this.produtoForm.quantidade().value.set(produto.quantidade);
    this.produtoForm.emProducao().value.set(produto.emProducao === 'Sim');
  }


  protected onCancelarEdicao() {
    this.produtoEditando.set(null);
    // resetar produtoForm
    this.produtoForm.nome().value.set('');
    this.produtoForm.quantidade().value.set(0);
    this.produtoForm.emProducao().value.set(false);
  }

  
  protected onDeletarProduto(produto: Produto) {
    this.produtos.update((lista) => lista.filter(p => p !== produto));
  }
}