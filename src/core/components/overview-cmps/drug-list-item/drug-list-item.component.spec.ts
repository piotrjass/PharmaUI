import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugListItemComponent } from './drug-list-item.component';

describe('DrugListItemComponent', () => {
  let component: DrugListItemComponent;
  let fixture: ComponentFixture<DrugListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrugListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrugListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
