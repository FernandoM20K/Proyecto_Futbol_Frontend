import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEntrenadorComponent } from './card-entrenador.component';

describe('CardEntrenadorComponent', () => {
  let component: CardEntrenadorComponent;
  let fixture: ComponentFixture<CardEntrenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEntrenadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
