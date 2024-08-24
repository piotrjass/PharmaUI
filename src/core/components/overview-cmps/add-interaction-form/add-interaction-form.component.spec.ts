import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInteractionFormComponent } from './add-interaction-form.component';

describe('AddInteractionFormComponent', () => {
  let component: AddInteractionFormComponent;
  let fixture: ComponentFixture<AddInteractionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInteractionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddInteractionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
