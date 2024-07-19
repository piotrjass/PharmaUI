import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronicDrugsComponent } from './chronic-drugs.component';

describe('ChronicDrugsComponent', () => {
  let component: ChronicDrugsComponent;
  let fixture: ComponentFixture<ChronicDrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronicDrugsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChronicDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
