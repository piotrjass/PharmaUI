import { Component } from '@angular/core';
//
import { MainMenuCardComponent } from '../../../core/components/main-menu-page-cmps/main-menu-card/main-menu-card.component';
import { MainMenuCardsContainerComponent } from '../../../core/components/main-menu-page-cmps/main-menu-cards-container/main-menu-cards-container.component';

@Component({
  selector: 'app-main-menu-page',
  standalone: true,
  imports: [MainMenuCardComponent, MainMenuCardsContainerComponent],
  templateUrl: './main-menu-page.component.html',
  styleUrl: './main-menu-page.component.css',
})
export class MainMenuPageComponent {}
