import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtcDrugsComponent } from './otc-drugs.component';

describe('OtcDrugsComponent', () => {
  let component: OtcDrugsComponent;
  let fixture: ComponentFixture<OtcDrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtcDrugsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtcDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
