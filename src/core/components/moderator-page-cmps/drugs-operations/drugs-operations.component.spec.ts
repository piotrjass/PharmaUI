import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsOperationsComponent } from './drugs-operations.component';

describe('DrugsOperationsComponent', () => {
  let component: DrugsOperationsComponent;
  let fixture: ComponentFixture<DrugsOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrugsOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrugsOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
