import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-side-navbar-item',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './side-navbar-item.component.html',
  styleUrl: './side-navbar-item.component.css',
})
export class SideNavbarItemComponent {
  @Input() name: string = '';
  @Input() route: string = '';
}
