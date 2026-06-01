import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
}
