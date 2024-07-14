import { Component } from '@angular/core';
//
import { MainMenuCardComponent } from '../main-menu-card/main-menu-card.component';
//
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapFileSpreadsheet,
  bootstrapArchive,
  bootstrapStack,
  bootstrapChatLeftQuoteFill,
  bootstrapCapsulePill,
  bootstrapPenFill,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-main-menu-cards-container',
  standalone: true,
  imports: [MainMenuCardComponent],
  templateUrl: './main-menu-cards-container.component.html',
  styleUrl: './main-menu-cards-container.component.css',
  viewProviders: [
    provideIcons({
      bootstrapFileSpreadsheet,
      bootstrapArchive,
      bootstrapStack,
      bootstrapChatLeftQuoteFill,
      bootstrapCapsulePill,
      bootstrapPenFill,
    }),
  ],
})
export class MainMenuCardsContainerComponent {
  sections: any = [
    {
      title: 'Przegląd lekowy',
      icon: 'bootstrapFileSpreadsheet',
    },
    {
      title: 'Archiwum',
      icon: 'bootstrapArchive',
    },
    {
      title: 'Baza przeglądów',
      icon: 'bootstrapStack',
    },
    {
      title: 'Forum',
      icon: 'bootstrapChatLeftQuoteFill',
    },
    {
      title: 'Baza leków',
      icon: 'bootstrapCapsulePill',
    },
    {
      title: 'Edukacja',
      icon: 'bootstrapPenFill',
    },
  ];
}
