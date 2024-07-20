import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesOperationsComponent } from './diseases-operations.component';

describe('DiseasesOperationsComponent', () => {
  let component: DiseasesOperationsComponent;
  let fixture: ComponentFixture<DiseasesOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiseasesOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiseasesOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
