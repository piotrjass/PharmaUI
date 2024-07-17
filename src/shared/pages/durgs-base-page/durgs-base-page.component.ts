import { Component } from '@angular/core';
import { TopNavbarComponent } from '../../component/top-navbar/top-navbar.component';
import { ProductCardsContainerComponent } from '../../../core/components/drug-base-cmps/product-cards-container/product-cards-container.component';

@Component({
  selector: 'app-durgs-base-page',
  standalone: true,
  imports: [TopNavbarComponent, ProductCardsContainerComponent],
  templateUrl: './durgs-base-page.component.html',
  styleUrl: './durgs-base-page.component.css',
})
export class DurgsBasePageComponent {}
