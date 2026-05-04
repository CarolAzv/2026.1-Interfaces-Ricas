import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface Produto {
  nome: string;
  quantidade: number;
  emProducao: string;
}

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './html/app.html',
  styleUrl: './css/app.css'
})
export class App {
  protected readonly local = signal('Menu Principal');
  protected readonly produtos = signal<Produto[]>([]);
  protected readonly produtoEditando = signal<Produto | null>(null);

  protected onSalvarProduto(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const nomeInput = form.querySelector<HTMLInputElement>('input[name="nome"]');
    const quantidadeInput = form.querySelector<HTMLInputElement>('input[name="quantidade"]');
    const emProducaoInput = form.querySelector<HTMLInputElement>('input[name="emProducao"]');

    if (!nomeInput || !quantidadeInput || !emProducaoInput) {
      return;
    }

    const nome = nomeInput.value.trim();
    const quantidade = Number(quantidadeInput.value);
    const emProducao = emProducaoInput.checked ? 'Sim' : 'Não';

    if (!nome || !quantidadeInput.value) {
      return;
    }

    if (this.produtoEditando()) {
      // Editando
      this.produtos.update((lista) =>
        lista.map(p => p === this.produtoEditando() ? { nome, quantidade, emProducao } : p)
      );
      this.produtoEditando.set(null);
    } else {
      // Adicionando
      this.produtos.update((lista) => [
        ...lista,
        { nome, quantidade, emProducao }
      ]);
    }

    form.reset();
  }

  protected onAlterarProduto(produto: Produto) {
    this.produtoEditando.set(produto);
  }

  protected onCancelarEdicao() {
    this.produtoEditando.set(null);
  }

  protected onDeletarProduto(produto: Produto) {
    this.produtos.update((lista) => lista.filter(p => p !== produto));
  }
}
