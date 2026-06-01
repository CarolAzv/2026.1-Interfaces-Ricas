import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

import { Listar } from './listar';
import { ProdutoData } from '../../app.form';

describe('Listar', () => {
  let component: Listar;
  let fixture: ComponentFixture<Listar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listar);
    component = fixture.componentInstance;
    component.produtos = signal<ProdutoData[]>([]);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
