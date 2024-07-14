import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuCardComponent } from './main-menu-card.component';

describe('MainMenuCardComponent', () => {
  let component: MainMenuCardComponent;
  let fixture: ComponentFixture<MainMenuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMenuCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
