import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

import { Incluir } from './incluir';
import { ProdutoData } from '../../app.form';

describe('Incluir', () => {
  let component: Incluir;
  let fixture: ComponentFixture<Incluir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Incluir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Incluir);
    component = fixture.componentInstance;
    component.produtos = signal<ProdutoData[]>([]);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
