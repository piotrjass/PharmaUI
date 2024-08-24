import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrugFormComponent } from './add-drug-form.component';

describe('AddDrugFormComponent', () => {
  let component: AddDrugFormComponent;
  let fixture: ComponentFixture<AddDrugFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDrugFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDrugFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
