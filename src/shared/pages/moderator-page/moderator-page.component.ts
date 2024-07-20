import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

//components
import { TopNavbarComponent } from '../../component/top-navbar/top-navbar.component';
import { SideNavbarComponent } from '../../component/side-navbar/side-navbar.component';

@Component({
  selector: 'app-moderator-page',
  standalone: true,
  imports: [TopNavbarComponent, SideNavbarComponent, RouterOutlet, RouterLink],
  templateUrl: './moderator-page.component.html',
  styleUrl: './moderator-page.component.css',
})
export class ModeratorPageComponent {
  parent_route: string = 'moderator-page';
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
}
