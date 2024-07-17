import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardsContainerComponent } from './product-cards-container.component';

describe('ProductCardsContainerComponent', () => {
  let component: ProductCardsContainerComponent;
  let fixture: ComponentFixture<ProductCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
