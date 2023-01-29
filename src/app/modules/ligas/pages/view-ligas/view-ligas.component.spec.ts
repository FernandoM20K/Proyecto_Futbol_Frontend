import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLigasComponent } from './view-ligas.component';

describe('ViewLigasComponent', () => {
  let component: ViewLigasComponent;
  let fixture: ComponentFixture<ViewLigasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLigasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
