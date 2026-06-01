import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Incluir } from './incluir';

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
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
