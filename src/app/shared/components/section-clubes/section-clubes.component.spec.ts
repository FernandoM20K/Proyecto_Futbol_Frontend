import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionClubesComponent } from './section-clubes.component';

describe('SectionClubesComponent', () => {
  let component: SectionClubesComponent;
  let fixture: ComponentFixture<SectionClubesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionClubesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionClubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
