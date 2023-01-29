import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddLigaComponent } from './form-add-liga.component';

describe('FormAddLigaComponent', () => {
  let component: FormAddLigaComponent;
  let fixture: ComponentFixture<FormAddLigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddLigaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
