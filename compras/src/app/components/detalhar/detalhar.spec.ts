import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalhar } from './detalhar';

describe('Detalhar', () => {
  let component: Detalhar;
  let fixture: ComponentFixture<Detalhar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalhar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalhar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
