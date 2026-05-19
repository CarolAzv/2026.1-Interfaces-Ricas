import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { form } from '@angular/forms/signals';


interface Produto {
  nome: string;
  quantidade: number;
  emProducao: string;
}

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, InputTextModule, InputNumberModule, 
            CheckboxModule, ButtonModule, ReactiveFormsModule
            ],
  templateUrl: './html/app.html',
  styleUrl: './css/app.css'
})
export class App {
  protected readonly local = signal('Menu Principal');
  protected readonly produtos = signal<Produto[]>([]);
  protected readonly produtoEditando = signal<Produto | null>(null);
  protected readonly emProducaoCheck = signal(false);

  protected onSalvarProduto(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const nomeInput = form.querySelector<HTMLInputElement>('input[name="nome"]');
    const quantidadeInput = form.querySelector<HTMLInputElement>('input[name="estoque"]');

    if (!nomeInput || !quantidadeInput) {
      return;
    }

    const nome = nomeInput.value.trim();
    const quantidade = Number(quantidadeInput.value);
    const emProducao = this.emProducaoCheck() ? 'Sim' : 'Não';

    if (!nome || !quantidadeInput.value) {
      return;
    }

    if (this.produtoEditando()) {
      // Editando
      this.produtos.update((lista) =>
        lista.map(p => p === this.produtoEditando() ? { nome, quantidade, emProducao } : p)
      );
      this.produtoEditando.set(null);
      this.emProducaoCheck.set(false);
    } else {
      // Adicionando
      this.produtos.update((lista) => [
        ...lista,
        { nome, quantidade, emProducao }
      ]);
    }

    form.reset();
    this.emProducaoCheck.set(false);
  }

  protected onAlterarProduto(produto: Produto) {
    this.produtoEditando.set(produto);
    this.emProducaoCheck.set(produto.emProducao === 'Sim');
  }

  protected onCancelarEdicao() {
    this.produtoEditando.set(null);
    this.emProducaoCheck.set(false);
  }

  protected onDeletarProduto(produto: Produto) {
    this.produtos.update((lista) => lista.filter(p => p !== produto));
  }

  

  produtoModel = signal({
    nome: '',
    quantidade: '',

  });


  produtoForm = form(this.produtoModel);
}
