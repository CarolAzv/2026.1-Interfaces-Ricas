import { signal } from '@angular/core';

export interface ProdutoData{
  nome: string;
  quantidade: number;
  emProducao: boolean;
}

export const ProdutoModel : ProdutoData = {
  nome: '',
  quantidade: 0,
  emProducao: false,
};