import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDiseaseComponent } from './single-disease.component';

describe('SingleDiseaseComponent', () => {
  let component: SingleDiseaseComponent;
  let fixture: ComponentFixture<SingleDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDiseaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
