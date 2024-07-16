import { Component } from '@angular/core';
import { TopNavbarComponent } from '../../../core/components/overview-cmps/top-navbar/top-navbar.component';
import { SideNavbarComponent } from '../../../core/components/overview-cmps/side-navbar/side-navbar.component';
import { FormsContainerComponent } from '../../../core/components/overview-cmps/forms-container/forms-container.component';

@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [TopNavbarComponent, SideNavbarComponent, FormsContainerComponent],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.css',
})
export class OverviewPageComponent {}
