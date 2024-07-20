import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportErrorFormComponent } from './report-error-form.component';

describe('ReportErrorFormComponent', () => {
  let component: ReportErrorFormComponent;
  let fixture: ComponentFixture<ReportErrorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportErrorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportErrorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
