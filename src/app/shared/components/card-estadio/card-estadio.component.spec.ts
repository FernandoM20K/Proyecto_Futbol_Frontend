import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEstadioComponent } from './card-estadio.component';

describe('CardEstadioComponent', () => {
  let component: CardEstadioComponent;
  let fixture: ComponentFixture<CardEstadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEstadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEstadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
