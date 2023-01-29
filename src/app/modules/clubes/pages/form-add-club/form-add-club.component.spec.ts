import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddClubComponent } from './form-add-club.component';

describe('FormAddClubComponent', () => {
  let component: FormAddClubComponent;
  let fixture: ComponentFixture<FormAddClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
