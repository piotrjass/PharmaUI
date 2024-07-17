import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-cards-container',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-cards-container.component.html',
  styleUrl: './product-cards-container.component.css',
})
export class ProductCardsContainerComponent {}
