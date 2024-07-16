import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurgsBasePageComponent } from './durgs-base-page.component';

describe('DurgsBasePageComponent', () => {
  let component: DurgsBasePageComponent;
  let fixture: ComponentFixture<DurgsBasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DurgsBasePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DurgsBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
