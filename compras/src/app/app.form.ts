import {form, FormField, required} from '@angular/forms/signals';
import { Component, signal } from '@angular/core';


interface produtoData {
    nome: string;
    quantidade: number;
    emProducao: boolean;
}

const produtoModel = signal<produtoData>({
    nome: '',
    quantidade: 0,
    emProducao: false,
});

export const produtoForm = form(produtoModel);