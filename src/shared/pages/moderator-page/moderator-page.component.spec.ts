import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorPageComponent } from './moderator-page.component';

describe('ModeratorPageComponent', () => {
  let component: ModeratorPageComponent;
  let fixture: ComponentFixture<ModeratorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeratorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
