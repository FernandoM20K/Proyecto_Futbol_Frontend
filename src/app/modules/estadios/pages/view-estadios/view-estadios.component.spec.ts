import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEstadiosComponent } from './view-estadios.component';

describe('ViewEstadiosComponent', () => {
  let component: ViewEstadiosComponent;
  let fixture: ComponentFixture<ViewEstadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEstadiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEstadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
