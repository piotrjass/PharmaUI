import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportErrorPageComponent } from './report-error-page.component';

describe('ReportErrorPageComponent', () => {
  let component: ReportErrorPageComponent;
  let fixture: ComponentFixture<ReportErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportErrorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
