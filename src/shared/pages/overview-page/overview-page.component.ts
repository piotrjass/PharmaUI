import { Component, Input, OnInit } from '@angular/core';
import {
  RouterOutlet,
  ActivatedRoute,
  Router,
  NavigationEnd,
} from '@angular/router';
// components
import { TopNavbarComponent } from '../../../core/components/overview-cmps/top-navbar/top-navbar.component';
import { SideNavbarComponent } from '../../../core/components/overview-cmps/side-navbar/side-navbar.component';
// import { TopNavbarComponent } from '../../component/top-navbar/top-navbar.component';
// import { SideNavbarComponent } from '../../component/side-navbar/side-navbar.component';
import { OverviewNavComponent } from '../../../core/components/overview-cmps/overview-nav/overview-nav.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [
    TopNavbarComponent,
    SideNavbarComponent,
    RouterOutlet,
    OverviewNavComponent,
  ],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.css',
})
export class OverviewPageComponent implements OnInit {
  sectionTitle: string = 'Dane pacjenta';
  back_router_link: string = '';
  next_router_link: string = '';

  private routes = [
    'patient-data',
    'patient-diseases',
    'chronic-drugs',
    'otc-drugs',
    'side-effects',
    'interactions',
    'recommendations',
    'summary',
  ];

  currentRouteIndex = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateNavigationLinks();
        this.updateSectionTitle();
      });
  }

  ngOnInit() {
    this.updateNavigationLinks();
    this.updateSectionTitle();
  }

  updateNavigationLinks() {
    const currentUrl = this.router.url;
    const currentPath = currentUrl.split('/')[2]; // Pobieramy ścieżkę bez "overview"
    this.currentRouteIndex = this.routes.indexOf(currentPath);
    this.back_router_link = `/overview/${this.getPreviousRoute()}`;
    this.next_router_link = `/overview/${this.getNextRoute()}`;
  }

  updateSectionTitle() {
    const currentPath = this.router.url.split('/')[2];
    this.sectionTitle = this.getPolishTitle(currentPath);
  }

  getNextRoute(): string {
    return (
      this.routes[this.currentRouteIndex + 1] ||
      this.routes[this.currentRouteIndex]
    );
  }

  getPreviousRoute(): string {
    return (
      this.routes[this.currentRouteIndex - 1] ||
      this.routes[this.currentRouteIndex]
    );
  }

  getPolishTitle(path: string): string {
    switch (path) {
      case 'patient-data':
        return 'Dane pacjenta';
      case 'patient-diseases':
        return 'Choroby pacjenta';
      case 'chronic-drugs':
        return 'Leki na choroby przewlekłe';
      case 'otc-drugs':
        return 'Leki bez recepty';
      case 'side-effects':
        return 'Skutki uboczne';
      case 'interactions':
        return 'Interakcje';
      case 'recommendations':
        return 'Rekomendacje';
      case 'summary':
        return 'Podsumowanie';
      default:
        return 'Nieznana sekcja';
    }
  }
}
