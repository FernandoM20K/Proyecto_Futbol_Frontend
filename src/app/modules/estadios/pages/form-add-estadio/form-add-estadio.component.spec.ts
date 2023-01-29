import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddEstadioComponent } from './form-add-estadio.component';

describe('FormAddEstadioComponent', () => {
  let component: FormAddEstadioComponent;
  let fixture: ComponentFixture<FormAddEstadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddEstadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddEstadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
