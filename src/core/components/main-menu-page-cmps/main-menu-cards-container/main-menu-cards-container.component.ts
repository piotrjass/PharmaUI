import { Component } from '@angular/core';
import { RouterModule, RouterLink, Router } from '@angular/router';
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
  bootstrapPersonFillGear,
  bootstrapExclamationTriangleFill,
  bootstrapInfoCircleFill,
} from '@ng-icons/bootstrap-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-menu-cards-container',
  standalone: true,
  imports: [MainMenuCardComponent, RouterModule, RouterLink, CommonModule],
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
      bootstrapExclamationTriangleFill,
      bootstrapPersonFillGear,
      bootstrapInfoCircleFill,
    }),
  ],
})
export class MainMenuCardsContainerComponent {
  sections: any = [
    {
      title: 'Przegląd lekowy',
      icon: 'bootstrapFileSpreadsheet',
      isActive: true,
      route: '/overview/patient-data',
    },
    {
      title: 'Baza przeglądów',
      icon: 'bootstrapStack',
      isActive: false,
    },
    {
      title: 'Archiwum',
      icon: 'bootstrapArchive',
      isActive: false,
    },
    {
      title: 'Forum',
      icon: 'bootstrapChatLeftQuoteFill',
      isActive: false,
    },
    {
      title: 'Baza leków',
      icon: 'bootstrapCapsulePill',
      isActive: true,
      route: '/drugs-base',
    },
    {
      title: 'Edukacja',
      icon: 'bootstrapPenFill',
      isActive: false,
    },
    {
      title: 'Informacje',
      icon: 'bootstrapInfoCircleFill',
      route: '/information',
      isActive: false,
    },
    {
      title: 'Zgłoś błąd',
      icon: 'bootstrapExclamationTriangleFill',
      isActive: true,
      route: '/report-error',
    },
    // {
    //   title: 'Panel moderacji',
    //   icon: 'bootstrapPersonFillGear',
    //   isActive: true,
    //   route: '/moderator-page/diseases',
    // },
  ];
}
