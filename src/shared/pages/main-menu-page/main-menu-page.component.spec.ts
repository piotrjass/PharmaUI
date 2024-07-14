import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuPageComponent } from './main-menu-page.component';

describe('MainMenuPageComponent', () => {
  let component: MainMenuPageComponent;
  let fixture: ComponentFixture<MainMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMenuPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
