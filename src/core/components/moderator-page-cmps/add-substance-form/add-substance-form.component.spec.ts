import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubstanceFormComponent } from './add-substance-form.component';

describe('AddSubstanceFormComponent', () => {
  let component: AddSubstanceFormComponent;
  let fixture: ComponentFixture<AddSubstanceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSubstanceFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSubstanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
