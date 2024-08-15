import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  ActivatedRoute,
  Router,
  NavigationEnd,
} from '@angular/router';

//components
import { TopNavbarComponent } from '../../component/top-navbar/top-navbar.component';
import { SideNavbarComponent } from '../../component/side-navbar/side-navbar.component';
import { OverviewNavComponent } from '../../../core/components/overview-cmps/overview-nav/overview-nav.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-moderator-page',
  standalone: true,
  imports: [
    TopNavbarComponent,
    SideNavbarComponent,
    RouterOutlet,
    RouterLink,
    OverviewNavComponent,
  ],
  templateUrl: './moderator-page.component.html',
  styleUrl: './moderator-page.component.css',
})
export class ModeratorPageComponent {
  parent_route: string = 'moderator-page';
  sectionTitle: string = 'Moderacja';
  back_router_link: string = '';
  next_router_link: string = '';
  sections: any[] = [
    {
      name: 'Choroby',
      route: `/${this.parent_route}/diseases`,
    },
    {
      name: 'Leki',
      route: `/${this.parent_route}/drugs`,
    },
    {
      name: 'Działanie niepożądane',
      route: `/${this.parent_route}/side-effects`,
    },
    {
      name: 'Przeciwwskazania',
      route: `/${this.parent_route}/contraindications`,
    },
  ];

  private routes = ['diseases', 'drugs', 'side-effects', 'contraindications'];
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
    this.back_router_link = `/${this.parent_route}/${this.getPreviousRoute()}`;
    this.next_router_link = `/${this.parent_route}/${this.getNextRoute()}`;
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
      default:
        return 'Nieznana sekcja';
    }
  }
}
