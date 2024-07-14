import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuCardsContainerComponent } from './main-menu-cards-container.component';

describe('MainMenuCardsContainerComponent', () => {
  let component: MainMenuCardsContainerComponent;
  let fixture: ComponentFixture<MainMenuCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMenuCardsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMenuCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
