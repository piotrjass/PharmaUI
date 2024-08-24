import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewRecommendationsComponent } from './overview-recommendations.component';

describe('OverviewRecommendationsComponent', () => {
  let component: OverviewRecommendationsComponent;
  let fixture: ComponentFixture<OverviewRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewRecommendationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverviewRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
