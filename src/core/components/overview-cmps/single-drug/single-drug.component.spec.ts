import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDrugComponent } from './single-drug.component';

describe('SingleDrugComponent', () => {
  let component: SingleDrugComponent;
  let fixture: ComponentFixture<SingleDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDrugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
