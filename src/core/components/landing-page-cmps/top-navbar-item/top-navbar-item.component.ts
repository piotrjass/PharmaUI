import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-navbar-item',
  standalone: true,
  imports: [],
  templateUrl: './top-navbar-item.component.html',
  styleUrl: './top-navbar-item.component.css',
})
export class TopNavbarItemComponent {
  @Input() text: string = '';
}
