import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraindicatiosnsOperationsComponent } from './contraindications-operations.component';

describe('ContraindicatiosnsOperationsComponent', () => {
  let component: ContraindicatiosnsOperationsComponent;
  let fixture: ComponentFixture<ContraindicatiosnsOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContraindicatiosnsOperationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContraindicatiosnsOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
