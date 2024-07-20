import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// components
import { TopNavbarComponent } from '../../../core/components/overview-cmps/top-navbar/top-navbar.component';
import { SideNavbarComponent } from '../../../core/components/overview-cmps/side-navbar/side-navbar.component';

@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [TopNavbarComponent, SideNavbarComponent, RouterOutlet],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.css',
})
export class OverviewPageComponent {}
