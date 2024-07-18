import { Component } from '@angular/core';
import { SideNavbarItemComponent } from '../side-navbar-items/side-navbar-item.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [SideNavbarItemComponent, RouterLink, RouterModule],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css',
})
export class SideNavbarComponent {
  sections: any[] = [
    {
      name: 'Dane pacjenta',
      route: 'pacjent',
    },
    {
      name: 'Choroby',
      route: '',
    },
    {
      name: 'Suplementy',
      route: '',
    },
    {
      name: 'Leki',
      route: '',
    },
    {
      name: 'Interakcje',
      route: '',
    },
  ];
}