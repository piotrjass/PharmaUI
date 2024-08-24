import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSummaryComponent } from './overview-summary.component';

describe('OverviewSummaryComponent', () => {
  let component: OverviewSummaryComponent;
  let fixture: ComponentFixture<OverviewSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverviewSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
