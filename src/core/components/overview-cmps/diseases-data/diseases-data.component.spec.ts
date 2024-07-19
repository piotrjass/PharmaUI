import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesDataComponent } from './diseases-data.component';

describe('DiseasesDataComponent', () => {
  let component: DiseasesDataComponent;
  let fixture: ComponentFixture<DiseasesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiseasesDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiseasesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
