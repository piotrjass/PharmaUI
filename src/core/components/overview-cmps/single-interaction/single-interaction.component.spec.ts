import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInteractionComponent } from './single-interaction.component';

describe('SingleInteractionComponent', () => {
  let component: SingleInteractionComponent;
  let fixture: ComponentFixture<SingleInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleInteractionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
